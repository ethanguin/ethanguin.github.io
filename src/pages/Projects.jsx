import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import disciplines from '../data/projects'

export default function Projects() {
  const [activeId, setActiveId] = useState(disciplines[0]?.id || '')
  const navigate = useNavigate()

  useEffect(() => {
    const OFFSET = 200
    const handleScroll = () => {
      const sections = disciplines
        .map((d) => {
          const el = document.getElementById(d.id)
          if (!el) return null
          return { id: d.id, top: el.getBoundingClientRect().top }
        })
        .filter(Boolean)
      const passed = sections.filter((s) => s.top <= OFFSET)
      if (passed.length) {
        setActiveId(passed[passed.length - 1].id)
      } else {
        setActiveId(sections[0]?.id)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="projects-page" style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 2rem 3rem' }}>
      <aside className="projects-sidenav">
        {disciplines.map((d) => (
          <a key={d.id} href={`#${d.id}`} className={`sidenav-link ${activeId === d.id ? 'active' : ''}`}>
            {d.title}
          </a>
        ))}
      </aside>

      <div className="projects-content">
        {disciplines.map((discipline) => (
          <section key={discipline.id} id={discipline.id} className="discipline">
            <div className="discipline-header">
              <h2>{discipline.title}</h2>
            </div>
            <div className="project-grid">
              {discipline.projects.map((project) => (
                <div
                  key={project.title}
                  className="project-card-wrapper"
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-card">
                    <img src={project.cover} alt={project.title} />
                    <div className="project-card-overlay">
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}