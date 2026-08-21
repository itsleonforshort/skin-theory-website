/**
 * The Theory §5.1. Editorial statement. The headline states a position, which
 * is a reason to keep reading rather than a promise.
 */
export function TheoryLead() {
  return (
    <section aria-labelledby="theory-headline" className="section-pad">
      <div className="shell">
        <h1 id="theory-headline" className="measure-display text-display-l text-ink">
          Fewer actives, named on the front, at amounts that do something.
        </h1>
        <p className="measure-lead mt-8 text-lead text-ink-soft">
          There are seven actives across the five products. This page says what each one does,
          which products carry it, and who should be careful with it. It is the page we wish had
          existed when we were the ones buying.
        </p>
      </div>
    </section>
  );
}
