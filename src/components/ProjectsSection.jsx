import { SectionHeading } from './SectionHeading'

function ProjectVisual({ title, image }) {
  return (
    <figure className="project-visual">
      <img src={image.src} width={image.width} height={image.height} alt={title} />
    </figure>
  )
}

export function ProjectsSection({ items }) {
  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across media, legal tech, and product engineering."
        description="These projects reflect the kind of systems I enjoy building: secure, integrated, and designed to support both product velocity and operational resilience."
      />

      <div className="projects-grid">
        {items.map((project) => (
          <article key={project.title} className="project-card">
            <ProjectVisual
              title={project.title}
              image={project.image}
            />

            <div className="project-copy">
              <div className="project-heading">
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
