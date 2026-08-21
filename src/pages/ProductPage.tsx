import { useParams } from 'react-router-dom';
import { getProduct } from '../data/products';
import { useMeta } from '../lib/useMeta';
import { NotFoundPage } from './NotFoundPage';
import { ProductLead } from '../sections/product/ProductLead';
import { WhyItWorks } from '../sections/product/WhyItWorks';
import { HowToUseIt } from '../sections/product/HowToUseIt';
import { FullFormula } from '../sections/product/FullFormula';
import { ProductReviews } from '../sections/product/ProductReviews';
import { WorksWellWith } from '../sections/product/WorksWellWith';
import { ProductQuestions } from '../sections/product/ProductQuestions';
import { ProductClosingBand } from '../sections/product/ProductClosingBand';

/**
 * One template, five instances. Only the accent family, the artwork and the
 * copy change. The rhythm is split, badges, sequence, accordion, quotes, grid,
 * accordion, band. design/PAGE-BLUEPRINTS.md §3.
 */
export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  useMeta(
    product ? product.metaTitle : 'Page not found | Skin Theory',
    product ? product.metaDescription : 'This page moved or never existed.',
  );

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ProductLead product={product} />
      <WhyItWorks product={product} />
      <HowToUseIt product={product} />
      <FullFormula product={product} />
      <ProductReviews product={product} />
      <WorksWellWith product={product} />
      <ProductQuestions product={product} />
      <ProductClosingBand product={product} />
    </>
  );
}
