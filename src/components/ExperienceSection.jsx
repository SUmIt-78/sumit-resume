import { SectionHeading } from './SectionHeading'

export function ExperienceSection({ items }) {
  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Enterprise experience across delivery, modernization, and scale."
        description="From legacy modernization to customer engagement workflows and digital media platforms, each role added more scale, ownership, and production complexity."
      />

      <div className="timeline">
        {items.map((item) => (
          <article key={`${item.role}-${item.period}`} className="timeline-card">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="timeline-badge">{item.focus}</span>
              </div>

              <ul className="timeline-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
