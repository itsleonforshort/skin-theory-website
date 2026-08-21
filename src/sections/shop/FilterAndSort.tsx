import { useId } from 'react';
import { filters, sorts } from '../../data/shop';

interface FilterAndSortProps {
  filter: string;
  sort: string;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  resultCount: number;
}

/**
 * Shop §2.2. A 64px band with rules above and below. Filter and sort state is
 * held in the URL query, so a filtered view can be shared and the back button
 * works.
 */
export function FilterAndSort({
  filter,
  sort,
  onFilterChange,
  onSortChange,
  resultCount,
}: FilterAndSortProps) {
  const sortId = useId();

  return (
    <div className="border-y border-line">
      <div className="shell flex flex-col gap-4 py-4 lg:h-16 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Filter products">
          {filters.map((entry) => {
            const active = entry.id === filter;
            return (
              <button
                key={entry.id}
                type="button"
                aria-pressed={active}
                onClick={() => onFilterChange(entry.id)}
                className={`btn btn-small ${active ? 'btn-small-active' : ''}`}
              >
                {entry.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor={sortId} className="field-label !mb-0">
            Sort by
          </label>
          <select
            id={sortId}
            className="field-input !h-10 !w-auto"
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
          >
            {sorts.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p role="status" aria-live="polite" className="visually-hidden">
        {resultCount === 1 ? '1 product shown' : `${resultCount} products shown`}
      </p>
    </div>
  );
}
