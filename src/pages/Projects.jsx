import { useEffect, useState } from 'react';

const disciplines = [
  {
    id: 'capstones',
    title: 'Capstones',
    projects: [
      { title: 'DragonKisser', cover: '/media/dragonkisserCover.png', summary: 'Worked as the lead VFX artist and Tech Artist. create environment, FX, and UI tools within Unreal and Houdini.' },
      { title: 'Honey Business', cover: '/media/boboCover.png', summary: 'Worked as an FX artist. Built production tools and researched techniques for bee swarms, fluid simulation, and plant keep alive.' },
      { title: 'Love & Gold', cover: '/media/loveandgoldcover.png', summary: 'Worked as an FX artist. Built production tools for fire, snow storms, coin pile RBD, and shattering FX.' },
      { title: 'Skyguard', cover: '/media/skyguardCover.png', summary: 'Worked as a VFX artist. Created bullet and explosion effects for the enemy grunts. Created and placed FX in cinematics.' },
    ],
  },
  {
    id: 'fx',
    title: 'FX',
    projects: [
      // { title: 'Realtime Fire FX', cover: '/media/fire.jpg', summary: 'Short summary of the project.' },
      { title: 'Ocean Beach', cover: '/media/oceancover.png', summary: 'FLIP Ocean Simulation in Houdini with a custom implementation of the whitewater solver.' },
      { title: 'Gunsmoke Scene', cover: '/media/gunshot.png', summary: 'Project that puts together various FX elements. Vellum shirt simulation, Pyro smoke, FLIP and particle fluid, RBD shattered bottle.' },
      { title: 'Pumpkin Smash', cover: '/media/pumpkinCover.png', summary: 'Small RBD simulation project in Houdini. Layered with POP particles.' },
    ],
  },
  {
    id: 'tech-art',
    title: 'Tech Art',
    projects: [
      { title: 'Custom Voxel Terrain', cover: '/media/skidsteerCover.png', summary: 'Created a custom Skidsteer vehicle in UE5 and C++ that can add and remove to/from a custom C++ voxel terrain class' },
      { title: 'Gameboy', cover: '/media/gameboyCover.png', summary: 'Gameboy still life. Worked on developing shader and render techniques for the volumetrics, particulates, and caustic refractions.' },
      { title: 'Gingerbread', cover: '/media/gingerbreadCover.jpg', summary: 'Procedural gingerbread cabin in Houdini. The base can be customized via a parameterized tool.' },
      { title: 'Crystal Shader', cover: '/media/crystal.png', summary: 'An art-directable crystal shader that uses local position to control the appearance of the crystal. Driven by attributes that can be controlled by the artist.' },
      { title: 'Procedural Train', cover: '/media/trainCover.png', summary: 'A procedural train generated through PyMEL.' },
    ],
  },
  {
    id: 'graphics-programming',
    title: 'Graphics Programming',
    projects: [
      { title: 'Realtime GPU Pathtracer', cover: '/media/realtimeraytracer.png', summary: 'Used the Vulkan API within a C++ framework to help create a realtime pathtracer' },
      { title: 'CPU Raytracer', cover: 'media/cppraytracer2.png', summary: 'Used C++ to program a raytracer, using phong shading combined with reflection rays.' },
    ],
  },
]

export default function Projects() {
  const [activeId, setActiveId] = useState(disciplines[0]?.id || '');

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

    // find the last section that has crossed the offset line from the top
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
          <a key={d.id} href={`#${d.id}`} className={`sidenav-link ${activeId === d.id ? 'active' : ''}`}>{d.title}</a>
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
  );
}