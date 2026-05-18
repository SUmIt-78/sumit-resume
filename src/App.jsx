import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import {
  contactLinks,
  experienceTimeline,
  heroHighlights,
  personalInfo,
  projects,
  skillGroups,
} from './data/portfolioData'

function App() {
  return (
    <div className="app-shell">
      <Navbar
        links={[
          { href: '#hero', label: 'Home' },
          { href: '#about', label: 'About' },
          { href: '#experience', label: 'Experience' },
          { href: '#projects', label: 'Projects' },
          { href: '#contact', label: 'Contact' },
        ]}
        resumeHref={personalInfo.resumeHref}
      />

      <main>
        <HeroSection profile={personalInfo} highlights={heroHighlights} />
        <AboutSection profile={personalInfo} skillGroups={skillGroups} />
        <ProjectsSection items={projects} />
        <ExperienceSection items={experienceTimeline} />
        <ContactSection profile={personalInfo} links={contactLinks} />
      </main>
    </div>
  )
}

export default App
