/**
 * The two-leaf line mark printed on the cartons, drawn once as flat SVG and
 * reused. design/DESIGN-SYSTEM.md §6.4.
 */
export function PlantDerivedMark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-2 text-gold-deep ${className}`.trim()}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M14 25V11" />
        <path d="M14 15c0-4 3-7 8-7.5C22 12 19 15.5 14 16" />
        <path d="M14 19c0-3.5-2.5-6.5-7-7 0 4 2.5 7 7 7.5" />
      </svg>
      <span className="text-micro uppercase">PLANT-DERIVED</span>
    </div>
  );
}
