interface PhotoPlateProps {
  /** Tracked caps lines, set in the box's own typographic language. */
  lines: string[];
  ratio?: '4/5' | '3/4' | '1/1';
  className?: string;
}

/**
 * A typographic plate on the bone ground.
 *
 * The blueprints call for three photographs the brand does not have yet: the
 * founder portrait, the workshop, and a bar out of its carton. Agent 2 owns
 * those renders. Shipping a broken image would fail PRD §9, so these panels
 * hold the space with type until the photographs exist, using the same bone
 * ground and the same tracked caps the cartons use.
 */
export function PhotoPlate({ lines, ratio = '4/5', className = '' }: PhotoPlateProps) {
  const ratioClass =
    ratio === '3/4' ? 'aspect-[3/4]' : ratio === '1/1' ? 'aspect-square' : 'aspect-[4/5]';

  return (
    <div
      className={`flex w-full flex-col justify-end gap-3 bg-bone p-8 lg:p-12 ${ratioClass} ${className}`.trim()}
    >
      {lines.map((line, index) => (
        <p
          key={line}
          className={index === 0 ? 'text-label uppercase text-ink' : 'text-micro uppercase text-ink-muted'}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
