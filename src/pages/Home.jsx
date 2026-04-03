export default function Home() {
  return (
    <div className="home">

      <section className="home-hero">
  <div className="home-title-block">
    <h1 className="home-name">Ethan Winn Bishop</h1>
    <p className="home-roles">Technical Artist &nbsp;·&nbsp; VFX &nbsp;·&nbsp; Graphics Programmer</p>
  </div>
  <a href="#reel" className="home-arrow" aria-label="Scroll to demo reel">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </a>
      </section>

      <section className="home-reel" id="reel">
  <iframe
    src="https://www.youtube.com/embed/bwopdJ6-qxQ?rel=0&modestbranding=1&iv_load_policy=3"
    title="Demo Reel"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</section>

    </div>
  )
}