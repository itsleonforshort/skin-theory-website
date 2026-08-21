import { useState } from 'react';
import { strings } from '../data/site';

type Ratio = '4/5' | '1/1' | '3/4';

interface BoxImageProps {
  src: string;
  alt: string;
  ratio?: Ratio;
  /** The hero and the product lead image load eagerly, everything else lazily. */
  priority?: boolean;
  className?: string;
  /** How much of the frame the carton fills. */
  inset?: 'tight' | 'roomy';
}

const ratioClass: Record<Ratio, string> = {
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
};

/**
 * An assembled box render on the bone ground, at one of the three aspect
 * ratios in design/DESIGN-SYSTEM.md §13. The carton is never stretched:
 * object-contain keeps the real carton proportions at every size.
 */
export function BoxImage({
  src,
  alt,
  ratio = '4/5',
  priority = false,
  className = '',
  inset = 'roomy',
}: BoxImageProps) {
  const [failed, setFailed] = useState(false);
  const padding = inset === 'tight' ? 'p-3' : 'p-6 sm:p-10';

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-bone ${ratioClass[ratio]} ${padding} ${className}`.trim()}
    >
      {failed ? (
        <span className="text-small text-ink-muted">{strings.imageFailed}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="box-render h-full w-full object-contain"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
