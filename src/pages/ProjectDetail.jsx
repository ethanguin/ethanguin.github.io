import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import disciplines from '../data/projects'

const allProjects = disciplines.flatMap((d) =>
  d.projects.map((p) => ({ ...p, discipline: d.title }))
)

function isVideo(src) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src)
}

function isYouTube(src) {
  return /youtube\.com|youtu\.be/.test(src)
}

function GalleryMedia({ item, className, style }) {
  if (isVideo(item.src)) {
    return <video className={className} style={style} src={item.src} autoPlay muted loop playsInline />
  }
  return <img className={className} style={style} src={item.src} alt={item.alt} />
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = allProjects.find((p) => p.slug === slug)

  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const gallery = project?.gallery ?? []
  const count = gallery.length

  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count])
  const next = useCallback(() => setActive((i) => (i + 1) % count), [count])

  // keyboard nav
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next])

  // lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  if (!project) {
    return (
      <div className="project-not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate('/projects')}>← Back to Projects</button>
      </div>
    )
  }

  const renderHero = () => {
    if (isYouTube(project.hero)) {
      return (
        <iframe
          className="project-hero-media"
          src={project.hero}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ aspectRatio: '16/9', border: 'none' }}
        />
      )
    }
    if (isVideo(project.hero)) {
      return <video className="project-hero-media" src={project.hero} autoPlay muted loop playsInline />
    }
    return <img className="project-hero-media" src={project.hero} alt={project.title} />
  }

  return (
    <div className="project-detail">

      {/* ── Back ── */}
      <button className="project-back-btn" onClick={() => navigate('/projects')}>
        ← Projects
      </button>

      {/* ── Title ── */}
      <div className="project-detail-title-block">
        <span className="project-discipline">{project.discipline}</span>
        <h1>{project.title}</h1>
        <p className="project-summary">{project.summary}</p>
      </div>

      {/* ── Hero ── */}
      <div className="project-hero">{renderHero()}</div>

      {/* ── Gallery Carousel ── */}
      {count > 0 && (
        <div className="gallery">
            <h2 className="gallery-heading">Gallery</h2>
          <div className="gallery-stage">
            {/* Left arrow */}
            <button className="gallery-arrow gallery-arrow--left" onClick={prev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Main image — clickable to open lightbox */}
            <div className="gallery-frame" onClick={() => setLightbox(true)} title="Click to expand">
              <GalleryMedia
                item={gallery[active]}
                className="gallery-img"
              />
              <div className="gallery-expand-hint">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 2h4v4M6 14H2v-4M14 2l-5 5M2 14l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Right arrow */}
            <button className="gallery-arrow gallery-arrow--right" onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="gallery-dots">
            {gallery.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot ${i === active ? 'gallery-dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close">×</button>

          <button
            className="lightbox-arrow lightbox-arrow--left"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="lightbox-media" onClick={(e) => e.stopPropagation()}>
            <GalleryMedia item={gallery[active]} className="lightbox-img" />
          </div>

          <button
            className="lightbox-arrow lightbox-arrow--right"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="lightbox-counter">{active + 1} / {count}</div>
        </div>
      )}

      {/* ── Breakdown ── */}
      {project.breakdown?.length > 0 && (
        <div className="project-body">
          {project.breakdown.map((section, i) => (
            <div key={i} className="project-section">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}