/**
 * About §4.1. Editorial statement. The page opens with a claim about why the
 * brand exists, not a photograph.
 */
export function AboutLead() {
  return (
    <section aria-labelledby="about-headline" className="section-pad">
      <div className="shell">
        <h1 id="about-headline" className="measure-display text-display-l text-ink">
          We print the whole formula because we could not find anyone else who would.
        </h1>
        <p className="measure-lead mt-8 text-lead text-ink-soft">
          Skin Theory makes five products in a workshop in Tigatto, Davao City. Every carton
          carries the full ingredient list, the size, the batch dates, and the address of the room
          it was made in.
        </p>
      </div>
    </section>
  );
}
