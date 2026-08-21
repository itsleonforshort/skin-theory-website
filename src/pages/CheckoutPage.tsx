import { useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cta, meta, paymentMethods, shippingRegions, site } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { useCart } from '../lib/useCart';
import { formatPeso, makeOrderNumber } from '../lib/format';
import { saveOrder } from '../lib/order';
import { isFormConfigured, notConfiguredMessage, submitToWeb3Forms } from '../lib/web3forms';
import { SelectField, TextAreaField, TextField } from '../components/Field';

interface Values {
  email: string;
  mobile: string;
  fullName: string;
  street: string;
  barangay: string;
  city: string;
  province: string;
  region: string;
  postalCode: string;
  notes: string;
  payment: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_PATTERN = /^[+0-9()\s-]{7,}$/;

const emptyValues: Values = {
  email: '',
  mobile: '',
  fullName: '',
  street: '',
  barangay: '',
  city: '',
  province: '',
  region: '',
  postalCode: '',
  notes: '',
  payment: '',
};

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That email address does not look right.';
  }
  if (!MOBILE_PATTERN.test(values.mobile.trim())) {
    errors.mobile = 'Please enter a mobile number we can reach you on.';
  }
  if (values.fullName.trim().length === 0) {
    errors.fullName = 'Please enter your full name.';
  }
  if (values.street.trim().length === 0) {
    errors.street = 'Please enter the house or unit number and street.';
  }
  if (values.barangay.trim().length === 0) {
    errors.barangay = 'Please enter your barangay.';
  }
  if (values.city.trim().length === 0) {
    errors.city = 'Please enter your city or municipality.';
  }
  if (values.province.trim().length === 0) {
    errors.province = 'Please enter your province.';
  }
  if (values.region.length === 0) {
    errors.region = 'Please choose your region so we can work out shipping.';
  }
  if (!/^\d{4}$/.test(values.postalCode.trim())) {
    errors.postalCode = 'Philippine postal codes are four digits, for example 8000.';
  }
  if (values.payment.length === 0) {
    errors.payment = 'Please choose how you would like to pay.';
  }

  return errors;
}

/**
 * Checkout §7.3. One page, three numbered stages stacked vertically, all
 * visible, no wizard that hides steps. The summary column sticks at the right
 * on lg and carries the only button on the page.
 *
 * Validation is inline and on blur, never only on submit. The order goes out
 * through Web3Forms and the cart is cleared only after a successful response.
 */
export function CheckoutPage() {
  useMeta(meta.checkout.title, meta.checkout.description);
  const navigate = useNavigate();
  const { lines, subtotal, clear } = useCart();

  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const barangayRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const provinceRef = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLSelectElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);

  const region = useMemo(
    () => shippingRegions.find((entry) => entry.id === values.region),
    [values.region],
  );

  const freeShipping = subtotal >= site.freeShippingThreshold;
  const shipping = region ? (freeShipping ? 0 : region.rate) : 0;
  const total = subtotal + shipping;

  function setField(field: keyof Values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function validateField(field: keyof Values) {
    const fieldErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  }

  function focusFirstInvalid(fieldErrors: Errors) {
    const order: [keyof Values, HTMLElement | null][] = [
      ['email', emailRef.current],
      ['mobile', mobileRef.current],
      ['fullName', fullNameRef.current],
      ['street', streetRef.current],
      ['barangay', barangayRef.current],
      ['city', cityRef.current],
      ['province', provinceRef.current],
      ['region', regionRef.current],
      ['postalCode', postalRef.current],
      ['payment', paymentRef.current],
    ];
    const first = order.find(([field]) => fieldErrors[field] !== undefined);
    first?.[1]?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fieldErrors = validate(values);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      setFormError('Please check the fields marked below, then send the order again.');
      focusFirstInvalid(fieldErrors);
      return;
    }

    const chosenRegion = shippingRegions.find((entry) => entry.id === values.region);
    const chosenPayment = paymentMethods.find((entry) => entry.id === values.payment);

    if (!chosenRegion || !chosenPayment) {
      setFormError('Please choose your region and how you would like to pay.');
      return;
    }

    setSubmitting(true);
    setFormError('');

    const orderNumber = makeOrderNumber();
    const itemLines = lines
      .map((line) => `${line.quantity} x ${line.name} (${line.size}) ${formatPeso(line.price * line.quantity)}`)
      .join('\n');

    const result = await submitToWeb3Forms({
      subject: `Skin Theory order ${orderNumber}`,
      from_name: values.fullName.trim(),
      replyto: values.email.trim(),
      email: values.email.trim(),
      order_number: orderNumber,
      mobile: values.mobile.trim(),
      delivery_address: `${values.street.trim()}, Barangay ${values.barangay.trim()}, ${values.city.trim()}, ${values.province.trim()} ${values.postalCode.trim()}`,
      region: chosenRegion.label,
      delivery_notes: values.notes.trim(),
      payment_method: chosenPayment.label,
      items: itemLines,
      subtotal: formatPeso(subtotal),
      shipping: shipping === 0 ? 'Free' : formatPeso(shipping),
      total: formatPeso(total),
    });

    if (result.status === 'failed') {
      setSubmitting(false);
      setFormError(
        'Something went wrong sending your order. Nothing was charged. Please try again, or call +63 917 482 6153.',
      );
      return;
    }

    saveOrder({
      orderNumber,
      email: values.email.trim(),
      mobile: values.mobile.trim(),
      fullName: values.fullName.trim(),
      street: values.street.trim(),
      barangay: values.barangay.trim(),
      city: values.city.trim(),
      province: values.province.trim(),
      regionLabel: chosenRegion.label,
      regionDays: chosenRegion.days,
      postalCode: values.postalCode.trim(),
      notes: values.notes.trim(),
      paymentLabel: chosenPayment.label,
      lines,
      subtotal,
      shipping,
      total,
      emailed: result.status === 'sent',
    });

    clear();
    setSubmitting(false);
    navigate('/order-confirmed');
  }

  if (lines.length === 0) {
    return (
      <div className="py-24">
        <div className="shell">
          <h1 className="text-display-m text-ink">Checkout</h1>
          <p className="measure-body mt-6 text-body text-ink-soft">
            There is nothing in your bag yet, so there is nothing to pay for. Start with the
            product that matches the concern printed on the front of the carton.
          </p>
          <Link to="/shop" className="btn btn-primary mt-8">
            {cta.shop}
          </Link>
        </div>
      </div>
    );
  }

  const shippingLine = region
    ? `Shipping to ${region.label}: ${shipping === 0 ? 'free' : formatPeso(shipping)}. Delivery in ${region.days}.`
    : 'Choose your region and we will work out the shipping.';

  return (
    <div className="py-24">
      <div className="shell">
        <h1 className="text-display-m text-ink">Checkout</h1>

        <form onSubmit={handleSubmit} noValidate className="mt-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-24">
            <div className="flex flex-col gap-16">
              <fieldset className="border-0 p-0">
                <legend className="font-display text-title text-ink">1. Contact</legend>
                <div className="mt-8 flex flex-col gap-8">
                  <TextField
                    name="email"
                    type="email"
                    label="Email address"
                    helper="Your receipt and tracking go here."
                    value={values.email}
                    error={errors.email}
                    inputRef={emailRef}
                    autoComplete="email"
                    onChange={(value) => setField('email', value)}
                    onBlur={() => validateField('email')}
                  />
                  <TextField
                    name="mobile"
                    type="tel"
                    label="Mobile number"
                    helper="The courier calls this number on the day of delivery."
                    value={values.mobile}
                    error={errors.mobile}
                    inputRef={mobileRef}
                    autoComplete="tel"
                    onChange={(value) => setField('mobile', value)}
                    onBlur={() => validateField('mobile')}
                  />
                </div>
              </fieldset>

              <fieldset className="border-0 p-0">
                <legend className="font-display text-title text-ink">2. Delivery</legend>
                <div className="mt-8 flex flex-col gap-8">
                  <TextField
                    name="full_name"
                    label="Full name"
                    helper="Required"
                    value={values.fullName}
                    error={errors.fullName}
                    inputRef={fullNameRef}
                    autoComplete="name"
                    onChange={(value) => setField('fullName', value)}
                    onBlur={() => validateField('fullName')}
                  />
                  <TextField
                    name="street"
                    label="House or unit number and street"
                    helper="Required"
                    value={values.street}
                    error={errors.street}
                    inputRef={streetRef}
                    autoComplete="address-line1"
                    onChange={(value) => setField('street', value)}
                    onBlur={() => validateField('street')}
                  />
                  <TextField
                    name="barangay"
                    label="Barangay"
                    helper="Required"
                    value={values.barangay}
                    error={errors.barangay}
                    inputRef={barangayRef}
                    autoComplete="address-line2"
                    onChange={(value) => setField('barangay', value)}
                    onBlur={() => validateField('barangay')}
                  />
                  <TextField
                    name="city"
                    label="City or municipality"
                    helper="Required"
                    value={values.city}
                    error={errors.city}
                    inputRef={cityRef}
                    autoComplete="address-level2"
                    onChange={(value) => setField('city', value)}
                    onBlur={() => validateField('city')}
                  />
                  <TextField
                    name="province"
                    label="Province"
                    helper="Required"
                    value={values.province}
                    error={errors.province}
                    inputRef={provinceRef}
                    autoComplete="address-level1"
                    onChange={(value) => setField('province', value)}
                    onBlur={() => validateField('province')}
                  />
                  <SelectField
                    name="region"
                    label="Region"
                    helper="Required. This sets the shipping rate."
                    placeholder="Choose your region"
                    value={values.region}
                    error={errors.region}
                    selectRef={regionRef}
                    options={shippingRegions.map((entry) => ({
                      value: entry.id,
                      label: `${entry.label} · ${formatPeso(entry.rate)}`,
                    }))}
                    onChange={(value) => setField('region', value)}
                    onBlur={() => validateField('region')}
                  />
                  <p className="text-small text-ink-soft" role="status" aria-live="polite">
                    {shippingLine}
                  </p>
                  <TextField
                    name="postal_code"
                    label="Postal code"
                    helper="Required. Four digits."
                    value={values.postalCode}
                    error={errors.postalCode}
                    inputRef={postalRef}
                    autoComplete="postal-code"
                    onChange={(value) => setField('postalCode', value)}
                    onBlur={() => validateField('postalCode')}
                  />
                  <TextAreaField
                    name="delivery_notes"
                    label="Delivery notes"
                    helper="Landmarks, gate codes, or the best time to call. Optional."
                    value={values.notes}
                    onChange={(value) => setField('notes', value)}
                  />
                </div>
              </fieldset>

              <fieldset className="border-0 p-0">
                <legend className="font-display text-title text-ink">3. Payment</legend>
                <div className="mt-8">
                  {paymentMethods.map((method, index) => (
                    <label
                      key={method.id}
                      className="flex cursor-pointer gap-4 border-b border-line py-6"
                    >
                      <input
                        ref={index === 0 ? paymentRef : undefined}
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={values.payment === method.id}
                        onChange={(event) => setField('payment', event.target.value)}
                        onBlur={() => validateField('payment')}
                        className="mt-1 size-5 shrink-0 accent-black"
                      />
                      <span>
                        <span className="block font-display text-title text-ink">
                          {method.label}
                        </span>
                        <span className="measure-body mt-2 block text-body text-ink-soft">
                          {method.line}
                        </span>
                      </span>
                    </label>
                  ))}
                  {errors.payment ? <span className="field-error">{errors.payment}</span> : null}
                </div>
              </fieldset>
            </div>

            <div className="lg:sticky lg:top-[92px] lg:self-start">
              <div className="border border-line p-8">
                <h2 className="font-display text-title text-ink">Order summary</h2>

                <ul className="mt-6">
                  {lines.map((line) => (
                    <li
                      key={line.id}
                      className="flex items-start justify-between gap-4 border-b border-line py-4"
                    >
                      <span className="text-small text-ink-soft">
                        {line.quantity} x {line.name}
                        <span className="mt-1 block text-micro uppercase text-ink-muted">
                          {line.size}
                        </span>
                      </span>
                      <span className="text-small text-ink">
                        {formatPeso(line.price * line.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-label uppercase text-ink-muted">Subtotal</span>
                  <span className="text-body text-ink">{formatPeso(subtotal)}</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-label uppercase text-ink-muted">Shipping</span>
                  <span className="text-body text-ink">
                    {region ? (shipping === 0 ? 'Free' : formatPeso(shipping)) : 'Not set yet'}
                  </span>
                </div>

                <p className="mt-3 text-small text-ink-muted">{shippingLine}</p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-label uppercase text-ink">Total</span>
                  <span className="font-display text-title font-medium text-ink">
                    {formatPeso(total)}
                  </span>
                </div>

                <div role="alert" aria-live="assertive">
                  {formError ? <p className="field-error mt-4">{formError}</p> : null}
                </div>

                {!isFormConfigured ? (
                  <p className="mt-4 text-small text-ink-muted">{notConfiguredMessage}</p>
                ) : null}

                <button type="submit" className="btn btn-primary mt-8 w-full" disabled={submitting}>
                  {submitting ? 'Sending' : cta.checkout}
                </button>

                <ul className="mt-6 flex flex-col gap-2">
                  <li className="text-small text-ink-muted">
                    Seven-day returns on unopened items
                  </li>
                  <li className="text-small text-ink-muted">
                    Ships from Davao City within one working day
                  </li>
                  <li className="text-small text-ink-muted">
                    No card details are stored on this site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
