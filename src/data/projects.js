const disciplines = [
  {
    id: 'capstones',
    title: 'Capstones',
    projects: [
      {
        title: 'DragonKisser',
        slug: 'dragonkisser',
        cover: '/media/dragonkisserCover.png',
        summary: 'Worked as the lead VFX artist and Tech Artist. Created environment, FX, and UI tools within Unreal and Houdini.',
        // hero can be an image OR a video embed URL
        hero: '/media/dragonkisserCover.png',
        // gallery: array of { src, alt } — images or short video posters
        gallery: [
          { src: '/media/dragonkisserCover.png', alt: 'Environment shot' },
          { src: '/media/dragonkisserCover.png', alt: 'FX breakdown' },
          { src: '/media/dragonkisserCover.png', alt: 'UI tools' },
        ],
        // breakdown: array of { heading, body } paragraphs
        breakdown: [
          {
            heading: 'Role & Responsibilities',
            body: 'As lead VFX and Tech Artist on DragonKisser, I was responsible for the full FX pipeline — from initial R&D through final delivery. I worked closely with the environment and gameplay teams to ensure all real-time effects were both visually compelling and performant.',
          },
          {
            heading: 'Tools & Techniques',
            body: 'All simulations were authored in Houdini and exported as VAT (Vertex Animation Textures) for use in Unreal Engine 5. I also built several in-editor tools using Python and Blueprints to streamline repetitive FX placement tasks for the team.',
          },
          {
            heading: 'Challenges & Solutions',
            body: 'The biggest technical challenge was achieving high-fidelity fire and smoke within the real-time budget. I developed a custom flipbook pipeline that allowed us to use high-resolution Pyro renders as sprite sheets, maintaining visual quality while keeping draw calls minimal.',
          },
        ],
      },
      {
        title: 'Honey Business',
        slug: 'honey-business',
        cover: '/media/boboCover.png',
        summary: 'Worked as an FX artist. Built production tools and researched techniques for bee swarms, fluid simulation, and plant keep alive.',
        hero: '/media/boboCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'Honey Business was a capstone short film featuring a cast of animated bee characters. My work spanned bespoke simulation systems and pipeline tooling that allowed the FX department to iterate quickly under a tight production schedule.',
          },
        ],
      },
      {
        title: 'Love & Gold',
        slug: 'love-and-gold',
        cover: '/media/loveandgoldcover.png',
        summary: 'Worked as an FX artist. Built production tools for fire, snow storms, coin pile RBD, and shattering FX.',
        hero: '/media/loveandgoldcover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'Love & Gold required a diverse range of FX from stylised fire to large-scale coin RBD destruction. I built reusable HDA tools for each effect category so that artists could adjust parameters without touching the underlying simulation networks.',
          },
        ],
      },
      {
        title: 'Skyguard',
        slug: 'skyguard',
        cover: '/media/skyguardCover.png',
        summary: 'Worked as a VFX artist. Created bullet and explosion effects for enemy grunts. Created and placed FX in cinematics.',
        hero: '/media/skyguardCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'Skyguard is a third-person action game where I focused on real-time combat VFX. Bullet impacts, muzzle flashes, and explosion radii were all tuned in Unreal\'s Niagara system to feel punchy and readable at gameplay speeds.',
          },
        ],
      },
    ],
  },
  {
    id: 'fx',
    title: 'FX',
    projects: [
      {
        title: 'Ocean Beach',
        slug: 'ocean-beach',
        cover: '/media/oceancover.png',
        summary: 'FLIP Ocean Simulation in Houdini with a custom implementation of the whitewater solver.',
        hero: '/media/oceancover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Simulation Overview',
            body: 'This project explored large-scale ocean simulation using Houdini\'s FLIP solver with a custom whitewater layer. I modified the default whitewater solver to produce more granular foam behavior near the shoreline, drawing reference from real wave break footage.',
          },
        ],
      },
      {
        title: 'Gunsmoke Scene',
        slug: 'gunsmoke-scene',
        cover: '/media/gunshot.png',
        summary: 'Vellum shirt simulation, Pyro smoke, FLIP and particle fluid, RBD shattered bottle.',
        hero: '/media/gunshot.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A multi-system FX composition scene that combines cloth, fluid, pyro, and rigid body dynamics into a single cohesive shot. The goal was to practice layering heterogeneous simulations so they read as one seamless event.',
          },
        ],
      },
      {
        title: 'Pumpkin Smash',
        slug: 'pumpkin-smash',
        cover: '/media/pumpkinCover.png',
        summary: 'Small RBD simulation project in Houdini. Layered with POP particles.',
        hero: '/media/pumpkinCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A focused RBD study using Voronoi fracture and constraint networks to simulate a pumpkin shattering on impact. Secondary POP particles were emitted from fragment surfaces to sell the dusty pulp detail.',
          },
        ],
      },
    ],
  },
  {
    id: 'tech-art',
    title: 'Tech Art',
    projects: [
      {
        title: 'Custom Voxel Terrain',
        slug: 'custom-voxel-terrain',
        cover: '/media/skidsteerCover.png',
        summary: 'Custom Skidsteer vehicle in UE5 and C++ that can add and remove to/from a custom C++ voxel terrain class.',
        hero: '/media/skidsteerCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'This project built a runtime voxel terrain system entirely in C++ within Unreal Engine 5. A skid-steer vehicle was also authored from scratch, and its blade interaction drives real-time terrain deformation — adding and removing voxel cells as it moves.',
          },
        ],
      },
      {
        title: 'Gameboy',
        slug: 'gameboy',
        cover: '/media/gameboyCover.png',
        summary: 'Gameboy still life. Shader and render techniques for volumetrics, particulates, and caustic refractions.',
        hero: '/media/gameboyCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A photorealistic Gameboy still-life rendered in Karma XPU. The lens of the screen uses a custom refraction shader, and a volumetric dust layer was added to give the scene a nostalgic, light-diffused atmosphere.',
          },
        ],
      },
      {
        title: 'Gingerbread',
        slug: 'gingerbread',
        cover: '/media/gingerbreadCover.jpg',
        summary: 'Procedural gingerbread cabin in Houdini. The base can be customized via a parameterized tool.',
        hero: '/media/gingerbreadCover.jpg',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A fully procedural gingerbread cabin built as an HDA in Houdini. The tool exposes parameters for roof pitch, wall count, icing thickness, and candy placements — letting an artist generate unique variations without touching the network.',
          },
        ],
      },
      {
        title: 'Crystal Shader',
        slug: 'crystal-shader',
        cover: '/media/crystal.png',
        summary: 'Art-directable crystal shader using local position to control appearance, driven by artist-controlled attributes.',
        hero: '/media/crystal.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A MaterialX crystal shader built for Houdini\'s Karma renderer. The shader reads local position to drive gradient color shifts across the crystal faces, and exposes dispersion, internal scatter, and saturation as artist-friendly parameters.',
          },
        ],
      },
      {
        title: 'Procedural Train',
        slug: 'procedural-train',
        cover: '/media/trainCover.png',
        summary: 'A procedural train generated through PyMEL.',
        hero: '/media/trainCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A procedural train model built with PyMEL in Maya. The script generates the full locomotive geometry from parameters — wheel count, carriage length, and detail density — and can output clean topology ready for rigging or export.',
          },
        ],
      },
    ],
  },
  {
    id: 'graphics-programming',
    title: 'Graphics Programming',
    projects: [
      {
        title: 'Realtime GPU Pathtracer',
        slug: 'realtime-gpu-pathtracer',
        cover: '/media/realtimeraytracer.png',
        summary: 'Used the Vulkan API within a C++ framework to help create a realtime pathtracer.',
        hero: '/media/realtimeraytracer.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'Built using Vulkan\'s ray tracing extensions (VK_KHR_ray_tracing_pipeline), this project implements a progressive pathtracer that runs entirely on the GPU. Each frame accumulates samples, and the image converges to ground-truth lighting given enough time.',
          },
        ],
      },
      {
        title: 'CPU Raytracer',
        slug: 'cpu-raytracer',
        cover: 'media/cppraytracer2.png',
        summary: 'Used C++ to program a raytracer using Phong shading combined with reflection rays.',
        hero: 'media/cppraytracer2.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'A from-scratch CPU raytracer written in C++. The renderer supports Phong shading, recursive reflection rays, shadow rays, and a configurable scene description format. It was a foundational exercise in understanding the rendering equation before moving on to GPU implementations.',
          },
        ],
      },
    ],
  },
]

export default disciplines