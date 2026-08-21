/**
 * The gold 3X seal. It appears on Coco Kojic Gluta and nowhere else.
 * The serif is used here and only here. design/DESIGN-SYSTEM.md §6.5.
 */
export function RadianceSeal({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex size-24 flex-col items-center justify-center rounded-full bg-gold text-paper ${className}`.trim()}
    >
      <span className="font-seal text-[2rem] leading-none font-bold">3X</span>
      <span className="mt-1 text-center text-[0.5rem] tracking-claim uppercase">
        Radiance Boost
      </span>
    </div>
  );
}
