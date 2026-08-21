import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '../types';
import { featuredProducts } from '../data/products';
import { meta } from '../data/site';
import { filters, sorts } from '../data/shop';
import { useMeta } from '../lib/useMeta';
import { FilterAndSort } from '../sections/shop/FilterAndSort';
import { ShopHead } from '../sections/shop/ShopHead';
import { ShopGrid } from '../sections/shop/ShopGrid';
import { Sets } from '../sections/shop/Sets';
import { WhatTheNumbersMean } from '../sections/shop/WhatTheNumbersMean';
import { ClosingBand } from '../sections/ClosingBand';

const filterIds = filters.map((entry) => entry.id);
const sortIds = sorts.map((entry) => entry.id);

function applyFilter(items: Product[], filter: string): Product[] {
  if (filter === 'all') {
    return items;
  }
  if (filter === 'cleansers') {
    return items.filter((product) => product.category === 'cleanser');
  }
  if (filter === 'bars') {
    return items.filter((product) => product.category === 'bar');
  }
  if (filter === 'serum') {
    return items.filter((product) => product.category === 'serum');
  }
  // An address typed by hand can ask for a group that does not exist.
  return [];
}

function applySort(items: Product[], sort: string): Product[] {
  const copy = [...items];
  if (sort === 'price-low-to-high') {
    return copy.sort((a, b) => a.price - b.price);
  }
  if (sort === 'price-high-to-low') {
    return copy.sort((a, b) => b.price - a.price);
  }
  if (sort === 'best-rated') {
    return copy.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
  }
  return copy;
}

export function ShopPage() {
  useMeta(meta.shop.title, meta.shop.description);
  const [searchParams, setSearchParams] = useSearchParams();

  const rawFilter = searchParams.get('filter') ?? 'all';
  const rawSort = searchParams.get('sort') ?? 'featured';
  const sort = sortIds.includes(rawSort) ? rawSort : 'featured';
  const filter = rawFilter;

  const items = useMemo(
    () => applySort(applyFilter(featuredProducts, filter), sort),
    [filter, sort],
  );

  function updateParams(next: { filter?: string; sort?: string }) {
    const params = new URLSearchParams(searchParams);
    if (next.filter !== undefined) {
      if (next.filter === 'all') {
        params.delete('filter');
      } else {
        params.set('filter', next.filter);
      }
    }
    if (next.sort !== undefined) {
      if (next.sort === 'featured') {
        params.delete('sort');
      } else {
        params.set('sort', next.sort);
      }
    }
    setSearchParams(params);
  }

  return (
    <>
      <ShopHead />
      <FilterAndSort
        filter={filterIds.includes(filter) ? filter : ''}
        sort={sort}
        onFilterChange={(value) => updateParams({ filter: value })}
        onSortChange={(value) => updateParams({ sort: value })}
        resultCount={items.length}
      />
      <ShopGrid items={items} onShowAll={() => updateParams({ filter: 'all' })} />
      <Sets />
      <WhatTheNumbersMean />
      <ClosingBand
        headline="Five products. One page of ingredients. No surprises."
        body="Start with the one that matches the concern on the front of the carton."
      />
    </>
  );
}
