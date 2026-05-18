import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export function ContactSection({ profile, links }) {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something dependable, elegant, and useful."
        description="I’m open to full stack engineering opportunities where backend depth, frontend quality, and production ownership all matter."
      />

      <div className="contact-grid">
        <article className="contact-card contact-card-primary">
          <h3>Start a conversation</h3>
          <p>
            Whether it is a product build, platform modernization effort, or engineering role, I
            enjoy working on systems that need both technical rigor and thoughtful execution.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity, product, or challenge."
                rows="5"
                required
              />
            </label>

            <button className="button button-primary" type="submit">
              Send via Email
            </button>
          </form>
        </article>

        <div className="contact-side">
          <article className="contact-card">
            <h3>Direct details</h3>
            <div className="contact-detail-list">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              <span>{profile.location}</span>
            </div>
          </article>

          <article className="contact-card">
            <h3>Professional links</h3>
            <div className="social-grid">
              {links.map((link) => {
                const Component = link.href ? 'a' : 'div'

                return (
                  <Component
                    key={link.label}
                    className={`social-link ${link.href ? '' : 'is-disabled'}`.trim()}
                    href={link.href}
                    target={link.href ? '_blank' : undefined}
                    rel={link.href ? 'noreferrer' : undefined}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </Component>
                )
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
