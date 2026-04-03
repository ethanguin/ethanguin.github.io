export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <img src="/media/EthanBishop.jpg" alt="Ethan Bishop" className="home-photo" />
        <div className="home-intro">
          <p>Hello! I'm Ethan Bishop, a BYU student studying CS Animation with experience in FX, tech art, and shaders.</p>
        </div>
      </section>

      <section className="home-reel">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/bwopdJ6-qxQ"
            title="Demo Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  )
}