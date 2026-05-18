export function Navbar({ links, resumeHref }) {
  return (
    <header className="site-header">
      <nav className="navbar">
        <a className="brand" href="#hero" aria-label="Go to homepage">
          <span className="brand-mark">SR</span>
          <span className="brand-copy">
            <strong>Sumit Raut</strong>
            <span>Full Stack Engineer</span>
          </span>
        </a>

        <div className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="button button-secondary nav-cta" href={resumeHref} download>
          Download Resume
        </a>
      </nav>
    </header>
  )
}
