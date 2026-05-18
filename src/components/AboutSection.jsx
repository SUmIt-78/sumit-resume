import { SectionHeading } from './SectionHeading'

export function AboutSection({ profile, skillGroups }) {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="About"
        title="An engineer who enjoys both architecture and execution."
        description="My work sits at the intersection of backend reliability, thoughtful frontend delivery, and hands-on production ownership."
      />

      <div className="about-grid">
        <article className="story-card">
          <p>
            Over the last {profile.experienceYears}, I have worked across enterprise modernization
            programs, customer engagement systems, and digital subscription platforms. My strength
            is taking end-to-end ownership, from shaping service boundaries and integrating REST
            APIs to refining React experiences and supporting releases in production.
          </p>
          <p>
            I am especially comfortable in environments where product delivery and operational
            stability matter equally. That includes debugging complex issues with logs, improving
            maintainability through reusable components, and collaborating closely with QA, DevOps,
            and stakeholders to move features from idea to release with confidence.
          </p>

          <div className="story-points">
            <div>
              <strong>Recognition</strong>
              <span>Infosys Insta Award for modernization and automation contributions.</span>
            </div>
            <div>
              <strong>Engineering mindset</strong>
              <span>Secure systems, clean abstractions, measurable reliability, and maintainable UI.</span>
            </div>
          </div>
        </article>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
