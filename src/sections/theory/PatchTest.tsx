import { patchTestSteps } from '../../data/theory';
import { PhotoPlate } from '../../components/PhotoPlate';
import { Reveal } from '../../components/Reveal';

/**
 * The Theory §5.5. Split panel. This answers "will it work on my skin" with an
 * action rather than a promise.
 */
export function PatchTest() {
  return (
    <section aria-labelledby="patch-test-heading" className="section-pad bg-bone">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 id="patch-test-heading" className="measure-display text-display-m text-ink">
              Two nights on your arm before anything goes on your face.
            </h2>

            <ol className="mt-12">
              {patchTestSteps.map((step, index) => (
                <li key={step.heading} className="border-b border-line py-6">
                  <div className="flex gap-6">
                    <span aria-hidden="true" className="font-display text-title text-ink-muted">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-title text-ink">{step.heading}</h3>
                      <p className="measure-body mt-2 text-body text-ink-soft">{step.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal index={1}>
            <PhotoPlate
              lines={[
                'One bar, out of its carton',
                'Coco Kojic Gluta, 135 g',
                'Daylight, warm-white ground',
              ]}
              ratio="4/5"
              className="bg-paper"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
