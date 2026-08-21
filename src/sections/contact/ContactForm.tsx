import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { contactSubjects, cta, site } from '../../data/site';
import { isFormConfigured, notConfiguredMessage, submitToWeb3Forms } from '../../lib/web3forms';
import { SelectField, TextAreaField, TextField } from '../../components/Field';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface Values {
  name: string;
  email: string;
  orderNumber: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ORDER_PATTERN = /^ST-\d{5}$/i;

const emptyValues: Values = {
  name: '',
  email: '',
  orderNumber: '',
  subject: '',
  message: '',
};

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length === 0) {
    errors.name = 'Please tell us your name.';
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That email address does not look right.';
  }
  if (values.orderNumber.trim().length > 0 && !ORDER_PATTERN.test(values.orderNumber.trim())) {
    errors.orderNumber = 'Order numbers look like ST-10482.';
  }
  if (values.subject.length === 0) {
    errors.subject = 'Please choose one.';
  }
  if (values.message.trim().length === 0) {
    errors.message = 'Please write your message.';
  }

  return errors;
}

/**
 * Contact §6.2. Split panel: the form on the left at 55%, the direct details
 * on the right at 45%.
 *
 * All four states are built. Errors are announced in a live region and focus
 * moves to the first invalid field. An error keeps every entered value.
 * The Web3Forms access key is read from the environment and is never in the
 * source; without it the form says so plainly instead of failing silently.
 */
export function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<FormState>('idle');
  const [formMessage, setFormMessage] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const orderRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function setField(field: keyof Values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function validateField(field: keyof Values) {
    const fieldErrors = validate(values);
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  }

  function focusFirstInvalid(fieldErrors: Errors) {
    const order: [keyof Values, HTMLElement | null][] = [
      ['name', nameRef.current],
      ['email', emailRef.current],
      ['orderNumber', orderRef.current],
      ['subject', subjectRef.current],
      ['message', messageRef.current],
    ];
    const first = order.find(([field]) => fieldErrors[field] !== undefined);
    first?.[1]?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fieldErrors = validate(values);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      setState('error');
      setFormMessage('Please check the fields marked below.');
      focusFirstInvalid(fieldErrors);
      return;
    }

    if (!isFormConfigured) {
      setState('error');
      setFormMessage(notConfiguredMessage);
      return;
    }

    setState('submitting');
    setFormMessage('');

    const result = await submitToWeb3Forms({
      subject: `Skin Theory contact: ${values.subject}`,
      from_name: values.name.trim(),
      replyto: values.email.trim(),
      email: values.email.trim(),
      order_number: values.orderNumber.trim(),
      enquiry_type: values.subject,
      message: values.message.trim(),
    });

    if (result.status === 'sent') {
      setState('success');
      setFormMessage('');
      return;
    }

    setState('error');
    setFormMessage(
      result.status === 'not-configured'
        ? notConfiguredMessage
        : 'Something went wrong on our side and your message did not reach us. Nothing you typed was lost. Try again, or email hello@skintheory.ph directly.',
    );
  }

  return (
    <section aria-labelledby="contact-form-heading" className="pb-24">
      <div className="shell grid grid-cols-1 gap-16 lg:grid-cols-[55fr_45fr] lg:gap-24">
        <div>
          <h2 id="contact-form-heading" className="text-display-s text-ink">
            Send us a message
          </h2>

          {state === 'success' ? (
            <div className="mt-8 border border-line p-8">
              <h3 className="font-display text-title text-ink">Sent. We have it.</h3>
              <p className="measure-body mt-4 text-body text-ink-soft">
                A copy is on its way to the address you gave. Someone will reply within one working
                day, Monday to Saturday. If it is urgent, call {site.mobile} during shop hours.
              </p>
            </div>
          ) : (
            <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
              <TextField
                name="name"
                label="Your name"
                helper="Required"
                value={values.name}
                error={errors.name}
                inputRef={nameRef}
                autoComplete="name"
                onChange={(value) => setField('name', value)}
                onBlur={() => validateField('name')}
              />

              <TextField
                name="email"
                type="email"
                label="Email address"
                helper="Required. We reply to this address."
                value={values.email}
                error={errors.email}
                inputRef={emailRef}
                autoComplete="email"
                onChange={(value) => setField('email', value)}
                onBlur={() => validateField('email')}
              />

              <TextField
                name="order_number"
                label="Order number"
                helper="Leave blank if this is not about an order."
                value={values.orderNumber}
                error={errors.orderNumber}
                inputRef={orderRef}
                onChange={(value) => setField('orderNumber', value)}
                onBlur={() => validateField('orderNumber')}
              />

              <SelectField
                name="subject"
                label="What is this about"
                helper="Required"
                placeholder="Choose one"
                value={values.subject}
                error={errors.subject}
                selectRef={subjectRef}
                options={contactSubjects.map((subject) => ({ value: subject, label: subject }))}
                onChange={(value) => setField('subject', value)}
                onBlur={() => validateField('subject')}
              />

              <TextAreaField
                name="message"
                label="Your message"
                helper="Required. The more detail, the fewer emails back and forth."
                value={values.message}
                error={errors.message}
                textAreaRef={messageRef}
                onChange={(value) => setField('message', value)}
                onBlur={() => validateField('message')}
              />

              <div role="alert" aria-live="assertive">
                {state === 'error' && formMessage ? (
                  <div className="border-l-2 border-error pl-4">
                    <p className="font-display text-title text-ink">That did not send.</p>
                    <p className="mt-2 text-body text-error">{formMessage}</p>
                  </div>
                ) : null}
              </div>

              <div>
                <button type="submit" className="btn btn-primary" disabled={state === 'submitting'}>
                  {state === 'submitting' ? 'Sending' : cta.send}
                </button>
              </div>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-display-s text-ink">Or reach us directly</h2>

          <dl className="mt-8 flex flex-col gap-8">
            <div>
              <dt className="text-label uppercase text-ink-muted">Email</dt>
              <dd className="mt-2 text-body text-ink-soft">
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-line underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
                >
                  {site.email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-label uppercase text-ink-muted">Mobile and Viber</dt>
              <dd className="mt-2 text-body text-ink-soft">
                <a
                  href={`tel:${site.mobile.replace(/\s/g, '')}`}
                  className="underline decoration-line underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
                >
                  {site.mobile}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-label uppercase text-ink-muted">Hours</dt>
              <dd className="mt-2 text-body text-ink-soft">
                {site.hours}. Closed Sundays and Philippine public holidays.
              </dd>
            </div>

            <div>
              <dt className="text-label uppercase text-ink-muted">Workshop</dt>
              <dd className="mt-2 text-body text-ink-soft">
                {site.address}
                <br />
                This is where the products are made. It is not a walk-in shop, so please write or
                call before coming.
              </dd>
            </div>

            <div>
              <dt className="text-label uppercase text-ink-muted">Stockists</dt>
              <dd className="mt-2 text-body text-ink-soft">
                Skin Theory is carried by Sugbo Naturals in Cebu City and by Northmall Beauty in
                Tagum City. Ask us and we will tell you whether they have stock.
              </dd>
            </div>
          </dl>

          <ul className="mt-12 flex flex-col gap-4">
            <li>
              <Link to="/shipping-and-returns" className="btn-quiet">
                Shipping and Returns
              </Link>
            </li>
            <li>
              <Link to="/shipping-and-returns#tracking" className="btn-quiet">
                Where is my order
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}?subject=Wholesale%20enquiry`} className="btn-quiet">
                Wholesale enquiries
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
