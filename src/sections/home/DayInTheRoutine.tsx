import { Link } from 'react-router-dom';
import { eveningRoutine, morningRoutine } from '../../data/theory';
import type { RoutineStep } from '../../data/theory';
import { Reveal } from '../../components/Reveal';

function StepList({ steps, heading, id }: { steps: RoutineStep[]; heading: string; id: string }) {
  return (
    <div>
      <h3 id={id} className="text-label uppercase text-ink-muted">
        {heading}
      </h3>
      <ol className="mt-8">
        {steps.map((step, index) => (
          <li key={step.name} className="border-b border-line py-6">
            <div className="flex gap-6">
              <span aria-hidden="true" className="font-display text-title text-ink-muted">
                {index + 1}
              </span>
              <div>
                <p className="font-display text-title text-ink">
                  {step.slug ? (
                    <Link
                      to={`/shop/${step.slug}`}
                      className="underline decoration-line underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
                    >
                      {step.name}
                    </Link>
                  ) : (
                    step.name
                  )}
                </p>
                <p className="measure-body mt-2 text-body text-ink-soft">{step.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Home §1.6. Vertical sequence, two stacked columns, one rule per row, bottom
 * only. Sunscreen is named as a step the brand does not sell.
 */
export function DayInTheRoutine() {
  return (
    <section aria-labelledby="routine-headline" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="routine-headline" className="measure-display text-display-l text-ink">
            Where these fit in a normal day.
          </h2>
          <p className="measure-lead mt-6 text-lead text-ink-soft">
            Three steps in the morning, three at night. Nothing here needs a fourth product from
            somewhere else, except the one we do not make.
          </p>
        </Reveal>

        <Reveal index={1} className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <StepList steps={morningRoutine} heading="Morning" id="routine-morning" />
          <StepList steps={eveningRoutine} heading="Evening" id="routine-evening" />
        </Reveal>
      </div>
    </section>
  );
}
