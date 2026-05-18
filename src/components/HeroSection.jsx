import profileImage from '../assets/sumit-profile.png'

export function HeroSection({ profile, highlights }) {
  return (
    <section className="hero-section section" id="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow">
          {profile.title} · Java, Spring Boot, React, Microservices
        </p>

        <h1>Building digital products with clarity.</h1>

        <div className="hero-rotating-line" aria-label="Scalable, elegant, production-ready">
          <span>Scalable</span>
          <span>Elegant</span>
          <span>Production-ready</span>
        </div>

        <p className="hero-summary">
          I build resilient APIs, modernize legacy systems, and ship polished user-facing
          experiences that hold up under real-world operational demands. My approach blends backend
          depth, frontend clarity, and hands-on production ownership.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Work
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-meta">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="meta-card">
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="hero-visual" aria-label="Profile overview">
        <div className="portrait-frame">
          <div className="portrait-glow" aria-hidden="true"></div>
          <img src={profileImage} width="520" height="620" alt="Portrait of Sumit Raut" />
        </div>

        <div className="hero-panel hero-panel-top">
          <span className="panel-label">Current Focus</span>
          <p>Scalable API design, microservices delivery, cloud deployment, and reliable UX.</p>
        </div>

        <div className="hero-panel hero-panel-bottom">
          <span className="panel-label">Core Strengths</span>
          <p>
            REST architecture, production debugging, reusable React modules, and secure backend
            integration.
          </p>
        </div>
      </aside>
    </section>
  )
}
