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
        // gallery: [
        //   { src: '/media/dragonkisserCover.png', alt: 'Environment shot' },
        //   { src: '/media/dragonkisserCover.png', alt: 'FX breakdown' },
        //   { src: '/media/dragonkisserCover.png', alt: 'UI tools' },
        // ],
        // breakdown: array of { heading, body } paragraphs
        breakdown: [
          // {
          //   heading: 'Steam Project Page',
          //   body: 'Not yet available, but coming soon',
          // },
          {
            heading: 'Role & Responsibilities',
            body: 'As lead VFX Artist and Technical Artist on DragonKisser, I was responsible for the full FX pipeline from initial R&D through final delivery. I worked closely with the art, environment, and gameplay programming teams to ensure all real-time effects fit the visuals, were integrated properly,and were performant on our target hardware.',
          },
          {
            heading: 'Tools & Techniques',
            body: 'I used Houdini and EmberGen to create the fire FX, specifically looped fire sprite sheets for the environment. I also built several in-editor tools using Blueprints to streamline repetitive FX variation of size and orientation to the camera. \n\n For dynamic UI elements and UI FX, I created custom shaders and icons using Adobe Illustrator and Photoshop for specific shapes/designs and created custom shaders in Unreal\'s Material Editor to achieve a stylized look that matched the art direction for the UI. I also implemented Niagara UI Renderer components to integrate the FX into the UI system, allowing for dynamic and interactive visual effects that responded to player input and game events (specifically the hearts and the charm meter). \n I aided in the creation of the environment shaders by creating a layered shader for the buildings. This took in',
          },
          {
            heading: 'Challenges & Solutions',
            body: 'The biggest technical challenge was creating a world to UI transition for the heart-based particle FX. Specifically making the handoff performant and visually appealing instead of a jarring transition. ',
          },
        ],
      },
      {
        title: 'Honey Business',
        slug: 'honey-business',
        cover: '/media/boboCover.png',
        summary: 'I worked as an FX artist. I built production tools and researched techniques for bee swarms and honey fluid simulation. I also helped with instanced assets to aid in performance and render speeds.',
        hero: '/media/boboCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Bees',
            body: 'Honey Business was a capstone short film featuring swarms of animated bees. My contribution was creating simulation systems and tools that allowed the FX department to implement these swarms in a way that was both visually compelling and efficient for production. I built Houdini tools for simulating the bees\' flocking behavior.',
          },
          {
            heading: 'Honey Fluid',
            body: 'I researched and implemented a custom honey fluid simulation technique using Houdini\'s FLIP solver to allow for more art-directable sticky behavior. I passed my findings to other FX artists who implemented these techniques and other layered effects to create the final honey shots in the film.',
          }
        ],
      },
      {
        title: 'Love & Gold',
        slug: 'love-and-gold',
        cover: '/media/loveandgoldcover.png',
        summary: 'I worked as an FX artist. I built and implemented production tools for fire, magic, snow storms, coin pile RBD, and shattering FX.',
        hero: '/media/loveandgoldcover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Fire',
            body: 'I created various fires for background torches and cressets. These were created using Houdini\'s Pyro solver and rendered with RenderMan. I also implemented other various fires using other artists\' pre-existing tools and setups.',
          },
          {
            heading: 'Magic',
            body: 'I created magical effects for some of the blue magic effects. These were implemented using Houdini\'s particle systems and splines. I also created a tool for magic embers for a specific shot in the montage.',
          },
          {
            heading: 'Snow Storms',
            body: 'I created snow storm effects for the outdoor scenes. These were implemented using Houdini\'s particle systems and custom density shaders on the ground to create a realistic and dense snow drift and snow storm visuals. I packaged this tool into an HDA for other artists to impmement into the rest of the outdoor scenes to achieve a cohesive and efficient workflow for the snow storm effects across the film.',
          },
          {
            heading: 'Coin Pile RBD',
            body: 'I created a custom simulation that would deform coin piles as the main character walked through them. I also layered in particle FX to add more motion and detail.',
          },
          {
            heading: 'Shattering FX',
            body: 'I created shattering effects for the waterfall shatter in the scene with the bone dragon monster.'
          }
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
            body: 'I was a secondary VFX artist, where I contributed to the enemy VFX for the game. Specifically muzzle flashes and projectiles/trails. I also created and placed the VFX for the cinematics.',
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
        summary: 'FLIP Ocean Simulation in Houdini with a custom implementation of the default Houdini whitewater solver.',
        hero: '/media/oceancover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Simulation Overview',
            body: 'In this project, I explored large-scale ocean simulation using Houdini\'s FLIP solver with whitewater. I modified the default whitewater solver to produce more stable results along the wave front. \n\nI also implemented a custom wetness shader on the objects to sell the interaction between the ocean and the sand.',
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
            body: 'In this project, I combined cloth, fluid, pyro, and rigid body dynamics into a single cohesive shot. The goal was to practice integrating multiple simulation types together while maintaining a high level of visual quality and performance. I used Vellum for the shirt simulation, Houdini\'s Pyro solver for the gunshot smoke, FLIP fluids and POP particles for the liquid splash elements, and RBD/Bullet for the shattered bottle pieces. The biggest challenge was ensuring that all these different simulation types interacted with each other in a believable way while also optimizing the simulations to run efficiently. For example, I carefully timed the active collision interactions between the splashing liquid and the RBD pieces to avoid simulation instability while still selling the motion and interaction between the elements.',
          },
        ],
      },
      {
        title: 'Pumpkin Smash',
        slug: 'pumpkin-smash',
        cover: '/media/pumpkinCover.png',
        summary: 'RBD simulation project in Houdini. Layered with POP particles.',
        hero: '/media/pumpkinCover.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'This project was primarily focused on the RBD pumpkin smash, where I designed the fracture details and shapes to match my reference footage. I layered the RBD simulation with POP particles to add more motion and detail to the smash, such as small debris and seeds. \n\nI also created a system to cache and bring the simulation to Blender using USD, where I rendered the final shot using Cycles. The challenge here was properly ensuring the velocity attributes were properly written in Houdini and readable in Blender so that I could add motion blur.',
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
            body: 'This project built a runtime voxel terrain system entirely in C++ within Unreal Engine 5. I also authored a skid-steer vehicle, creating my own custom implementation of the ChaosVehichle plugin to stabilize its physics interaction with the voxel terrain.',
          },
          {
            heading: 'Challenges & Solutions',
            body: 'The biggest challenge was ensuring the terrain modifications were performant and didn\'t cause significant frame drops. I implemented a chunking system to only update the necessary sections of the terrain when modified, and I also optimized the collision generation for the modified areas to ensure smooth physics interactions with the vehicle.',
          }
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
            body: 'A photorealistic Gameboy still-life rendered in Karma XPU. The a custom screen texture and shader, and a combination of volumetric and particle techniques for the dust and particulates. \n\nThis project was originally rendered in Maya with Arnold, but I later ported the scene to Houdini using a USD workflow and rendered it with Karma XPU to experiment with custom shaders and handling and volumetric effects more efficiently.',
          },
          {
            heading: 'Challenges & Solutions',
            body: 'The biggest challenge was creating the shader for the dust particles to be consistently visible in light rays, while also being able to twist and turn the camera without the particles disappearing or looking flat. I used custom normals to define the light reflection and also a facing ratio to boost the brightness of the particles when they were facing away from the camera, which helped maintain their visibility and volume as the camera moved around the scene.',
          }
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
            body: 'I created a tool for the base of the gingerbread, which can be customized via a parameterized HDA interface. The tool exposes parameters for roof pitch, wall height, and overall dimensions of the house. I also added other parameterized tools for the candy roof, front walk, and the frosting trees.',
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
            body: 'A real-time crystal shader built for Unreal Engine 5. The shader uses the local position of the crystal geometry to drive various aspects of the appearance, such as color transitions, roughness, and opacity. I also created a set of artist-controlled attributes that can be used to further customize the look of the crystals.',
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
            body: 'A procedural train model built with PyMEL in Maya. The script generates the full locomotive geometry from parameterized inputs. This tool uses only primitive shapes and simple deformations to create the various parts of the train.',
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
        summary: 'Used the Vulkan API within a C++ framework to help create a realtime pathtracer with 2 other students.',
        hero: '/media/realtimeraytracer.png',
        gallery: [],
        breakdown: [
          {
            heading: 'Overview',
            body: 'Built using Vulkan\'s ray tracing extensions (VK_KHR), this project implements a progressive pathtracer that runs on the GPU. The renderer supports PBR materials, multiple light sources/types, and a BVH acceleration structure for efficient ray traversal. I worked alongside 2 other students to build the renderer from scratch, where I focused on the GLSL shaders, PBR implementation, and texture streaming to the GPU.',
          },
          {
            heading: 'My Contribution',
            body: 'I implemented the core path tracing shaders in GLSL, which handle ray generation, intersection tests, and shading calculations. I also implemented a PBR material system that supports metallic/roughness workflows and texture sampling. Additionally, I built a texture streaming system to manage mapped textures on objects in the scene, ensuring that the necessary texture data is efficiently sent to the GPU as needed for rendering. I also implemented a build tool that converts standard GLSL shaders into the neccessary SPIR-V format for Vulkan, allowing for a more streamlined iteration in our workflow.',
          }
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
            body: 'A from-scratch CPU raytracer written in C++. The renderer supports Phong shading, recursive reflection rays, shadow rays, and a configurable scene description format.',
          },
        ],
      },
    ],
  },
]

export default disciplines