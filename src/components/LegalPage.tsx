import type { LegalSection } from '../types';
import { lastUpdated } from '../data/legal';

interface LegalPageProps {
  title: string;
  sections: LegalSection[];
}

/**
 * The narrow template shared by the three legal pages: 72ch measure, py-24,
 * a display-m headline, a last-updated line, a table of contents of anchor
 * links, then numbered sections. No accordions; legal text is read by people
 * who need to find something, so it stays open and findable.
 * design/PAGE-BLUEPRINTS.md §8.
 */
export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <div className="py-24">
      <div className="shell">
        <div className="max-w-[72ch]">
          <h1 className="text-display-m text-ink">{title}</h1>
          <p className="mt-4 text-micro uppercase text-ink-muted">{lastUpdated}</p>

          <nav aria-labelledby="legal-contents" className="mt-12">
            <h2 id="legal-contents" className="text-label uppercase text-ink-muted">
              On this page
            </h2>
            <ol className="mt-6 flex flex-col gap-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="btn-quiet">
                    {index + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="border-t border-line pt-12 mt-16 scroll-mt-24"
            >
              <h2 id={`${section.id}-heading`} className="font-display text-title text-ink">
                {index + 1}. {section.heading}
              </h2>

              <div className="mt-6 flex flex-col gap-6 text-body text-ink-soft">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.table ? (
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <caption className="visually-hidden">{section.table.caption}</caption>
                    <thead>
                      <tr>
                        {section.table.head.map((heading) => (
                          <th
                            key={heading}
                            scope="col"
                            className="border-b border-line py-3 pr-6 text-label uppercase text-ink-muted"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join('|')}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cell}
                              className={`border-b border-line py-3 pr-6 text-small ${
                                cellIndex === 0 ? 'text-ink' : 'text-ink-soft'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
