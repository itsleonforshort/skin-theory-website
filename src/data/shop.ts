/**
 * Shop filter chips and sort options. Written in the words a buyer uses,
 * `Bars` rather than `Solid cleansing formats`. design/COPY.md §4.2.
 */

export interface ShopOption {
  id: string;
  label: string;
}

export const filters: ShopOption[] = [
  { id: 'all', label: 'All five' },
  { id: 'cleansers', label: 'Cleansers' },
  { id: 'bars', label: 'Bars' },
  { id: 'serum', label: 'Serum' },
];

export const sorts: ShopOption[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low-to-high', label: 'Price low to high' },
  { id: 'price-high-to-low', label: 'Price high to low' },
  { id: 'best-rated', label: 'Best rated' },
];
