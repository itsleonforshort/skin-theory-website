import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUUpLeft, Package, Truck } from '@phosphor-icons/react';
import type { Product } from '../../types';
import { accentStyle, nameColorClass } from '../../lib/accent';
import { formatPeso } from '../../lib/format';
import { riskReducers } from '../../data/site';
import { useCart } from '../../lib/useCart';
import { cta } from '../../data/site';
import { QuantityStepper } from '../../components/QuantityStepper';
import { StarRating } from '../../components/StarRating';
import { RadianceSeal } from '../../components/RadianceSeal';
import { PlantDerivedMark } from '../../components/PlantDerivedMark';

const riskIcons = [Truck, ArrowUUpLeft, Package];

/**
 * Product detail §3.1 and §3.2. The breadcrumb, then the split panel: one
 * large assembled box render on the left, and on the right the type stack in
 * the exact order the carton front uses.
 *
 * The gallery in the blueprint asks for three thumbnails as well. Only one
 * render exists per product today, and repeating the same picture three times
 * would be a lie about what is on offer, so the lead image stands alone until
 * Agent 2 renders the back panel and the unboxed shots.
 */
export function ProductLead({ product }: { product: Product }) {
  const { addLine } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    addLine(
      {
        id: product.slug,
        kind: 'product',
        name: product.shortName,
        size: product.size,
        price: product.price,
        image: product.image,
        imageAlt: product.imageAlt,
        href: `/shop/${product.slug}`,
      },
      quantity,
    );
  }

  return (
    <section style={accentStyle(product.accent)} aria-labelledby="product-name" className="pb-24">
      <div className="shell py-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-micro uppercase text-ink-muted">
            <li>
              <Link to="/shop" className="nav-link !text-micro">
                Shop
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="flex aspect-[3/4] w-full items-center justify-center bg-bone p-8 lg:p-12">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="box-render h-full w-full object-contain"
              fetchPriority="high"
              decoding="sync"
            />
          </div>
          {product.seal ? <RadianceSeal className="absolute top-8 right-8" /> : null}
          <PlantDerivedMark className="absolute right-8 bottom-8" />
        </div>

        <div className="flex flex-col justify-center">
          <h1 id="product-name" className={`text-display-s ${nameColorClass(product.accent)}`}>
            {product.name}
          </h1>
          <p className="mt-2 text-label uppercase text-ink-muted">{product.type}</p>

          <hr aria-hidden="true" className="rule-short bg-accent-deep" />

          <p className="text-label uppercase text-ink">{product.benefitLine}</p>
          <p className="mt-3 text-label uppercase text-ink-muted">{product.audienceLine}</p>
          <p className="mt-3 text-label uppercase text-ink-muted">{product.size}</p>

          <p className="mt-8 font-display text-title text-ink">{formatPeso(product.price)}</p>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} className="mt-2" />

          <p className="measure-body mt-8 text-body text-ink-soft">{product.shortDescription}</p>

          <div className="mt-10 flex flex-col gap-6">
            <QuantityStepper
              quantity={quantity}
              onChange={setQuantity}
              itemName={product.shortName}
            />
            <button
              type="button"
              onClick={handleAdd}
              aria-label={`${cta.add}, ${product.shortName}`}
              className="btn btn-primary w-full"
            >
              {cta.add}
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {riskReducers.map((line, index) => {
              const Icon = riskIcons[index];
              return (
                <li key={line} className="flex items-center gap-3 text-small text-ink-soft">
                  <Icon size={16} weight="light" aria-hidden="true" className="shrink-0" />
                  <span>{line}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
