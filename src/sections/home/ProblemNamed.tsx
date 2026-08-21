import { Reveal } from '../../components/Reveal';

/**
 * Home §1.3. Editorial statement. Mostly white space, and that is the point.
 * It names the problem in the visitor's own words before anything is sold.
 */
export function ProblemNamed() {
  return (
    <section aria-labelledby="problem-headline" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="problem-headline" className="measure-display text-display-l text-ink">
            You have already tried the ones that promise everything.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <p className="measure-lead text-lead text-ink-soft">
            The dark spots faded for three weeks and came back. The T-zone was shining again by
            lunch. The bottle that was going to fix all of it is still half full at the back of the
            shelf.
          </p>
          <p className="measure-lead text-lead text-ink-soft">
            Most of the time the problem is not your skin. It is that you were never told what was
            in the bottle, or how much of it, or how long it was supposed to take.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
