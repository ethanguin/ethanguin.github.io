const disciplines = [
  {
    id: 'capstones',
    title: 'Capstones',
    projects: [
      { title: 'DragonKisser', cover: '/media/dragonkisser.jpg', summary: 'Short summary of the project.' },
      { title: 'Honey Business', cover: '/media/honeybusiness.jpg', summary: 'Short summary of the project.' },
      { title: 'Love & Gold', cover: '/media/loveandgold.jpg', summary: 'Short summary of the project.' },
      { title: 'Skyguard', cover: '/media/skyguard.jpg', summary: 'Short summary of the project.' },
    ],
  },
  {
    id: 'fx',
    title: 'FX',
    projects: [
      { title: 'Realtime Fire FX', cover: '/media/fire.jpg', summary: 'Short summary of the project.' },
      { title: 'Gunsmoke Scene', cover: '/media/gunsmoke.jpg', summary: 'Short summary of the project.' },
      { title: 'Ocean Beach', cover: '/media/ocean.jpg', summary: 'Short summary of the project.' },
      { title: 'Pumpkin Smash', cover: '/media/pumpkin.jpg', summary: 'Short summary of the project.' },
    ],
  },
  {
    id: 'tech-art',
    title: 'Tech Art',
    projects: [
      { title: 'Crystal Shader', cover: '/media/crystal.jpg', summary: 'Short summary of the project.' },
      { title: 'Custom Voxel Terrain', cover: '/media/voxel.jpg', summary: 'Short summary of the project.' },
      { title: 'Gameboy', cover: '/media/gameboy.jpg', summary: 'Short summary of the project.' },
      { title: 'Gingerbread', cover: '/media/gingerbread.jpg', summary: 'Short summary of the project.' },
      { title: 'Procedural Train', cover: '/media/train.jpg', summary: 'Short summary of the project.' },
    ],
  },
  {
    id: 'graphics-programming',
    title: 'Graphics Programming',
    projects: [
      { title: 'Realtime GPU Pathtracer', cover: '/media/pathtracer.jpg', summary: 'Short summary of the project.' },
      { title: 'CPU Raytracer', cover: '/media/raytracer.jpg', summary: 'Short summary of the project.' },
    ],
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
      <aside className="projects-sidenav">
        {disciplines.map((d) => (
          <a key={d.id} href={`#${d.id}`} className="sidenav-link">{d.title}</a>
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
                <div key={project.title} className="project-card-wrapper">
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