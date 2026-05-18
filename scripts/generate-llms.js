/**
 * Auto-generates public/llms-full.txt from the site's source data.
 * Run via: node scripts/generate-llms.js
 * Called automatically as a prebuild step.
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

function stripHtml(html) {
  return html
    .replace(/<iframe[^>]*>.*?<\/iframe>/gs, '')
    .replace(/<img[^>]*>/g, '')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gs, '$2 ($1)')
    .replace(/<\/li>\s*<li>/g, '</li>\n<li>')
    .replace(/<li>/g, '- ')
    .replace(/<\/li>/g, '')
    .replace(/<ul>/g, '\n')
    .replace(/<\/ul>/g, '')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<strong>(.*?)<\/strong>/gs, '**$1**')
    .replace(/<em>(.*?)<\/em>/gs, '*$1*')
    .replace(/<div[^>]*class="paragraph[^"]*"[^>]*>/g, '\n')
    .replace(/<div[^>]*class="notice"[^>]*>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&atilde;/g, 'ã')
    .replace(/&oacute;/g, 'ó')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&ecirc;/g, 'ê')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .split('\n')
    .map(line => line.trim())
    .filter((line, i, arr) => !(line === '' && (i === 0 || arr[i - 1] === '')))
    .join('\n')
    .trim();
}

function parseProjects(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const projects = [];

  const regex = /new ProjectData\(\s*"([^"]*)",\s*"([^"]*)",\s*"[^"]*",\s*`([\s\S]*?)`\s*,\s*"[^"]*"\s*,\s*"([^"]*)"\s*,\s*\[([^\]]*)\]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const tags = match[5]
      .split(',')
      .map(t => t.trim().replace(/^"|"$/g, ''))
      .filter(Boolean);
    projects.push({
      id: match[1],
      name: match[2],
      description: stripHtml(match[3]),
      origin: match[4],
      tags,
    });
  }
  return projects;
}

const allProjects = parseProjects(path.join(__dirname, '..', 'src', 'data', 'ProjectsData.ts'));

const formulaXrProjects = allProjects.filter(p => p.origin === 'formulaxr');
const freelanceProjects = allProjects.filter(p => p.origin === 'freelance');
const personalProjects = allProjects.filter(p => p.origin === 'personal');

function renderGroup(projects) {
  return projects
    .map(p => {
      const tagsLine = p.tags.length ? `\n*Tags: ${p.tags.join(', ')}*\n` : '';
      return `### ${p.name}${tagsLine}\n${p.description}`;
    })
    .join('\n\n---\n\n');
}

const output = `# Luiz Carlos da Silva Junior — Portfolio

> Senior Unity Engineer with 10+ years on interactive 3D systems. Unity day-to-day, with Unreal and C++ where they fit. Strongest in VR interaction layers, real-time multiplayer, editor tooling, and cross-platform delivery (Quest, iOS, Android, PC, WebGL, HoloLens).
> Founded FormulaXR in 2015. Production VR/AR titles live on the Meta Quest Store, App Store, and Google Play, in active use for years.

Website: https://luizcarlosfx.github.io
Email: luizcarlos.sfx@gmail.com
LinkedIn: https://www.linkedin.com/in/luizcarlosxr/
GitHub: https://github.com/luizcarlosfx
Discord: luizcarlosfx

I founded FormulaXR in 2015 and have led it ever since. In a small company that means going well beyond the technical work: lead developer and architect, but also team lead, regularly on calls and visits with clients, and one of the people shaping company strategy. Over those years the work has spanned a pretty broad range: games, medical VR training, industrial simulation, educational mini-games, and a markerless object tracking SDK. I tend to be involved end to end, from initial concept through the publishing process. Available for remote work.

---

## Resume

### Experience

#### FormulaXR (2015 – Present)

##### Senior Unity Engineer & Tech Lead (2020 – Present)

- Evolved XRProj from a desktop design-review tool into a real-time 3D platform shipping from one codebase to Quest, iOS, Android, PC, WebGL, and HoloLens. Distributed on the Meta Quest Store, App Store, and Google Play.
- Coded a PlayCanvas / TypeScript port of the Unity client for the web target with a custom serialization layer mirroring the Unity runtime. Component-by-component, written before LLMs existed; the mirroring was the slow part.
- Built a networking compatibility layer from Photon to FishNet using Roslyn source generators and Mono.Cecil IL post-processing to weave RPC call sites at compile time. Production migration in under 2 months, local LAN supporting 20+ concurrent players.
- Engineered the Virtua interaction layer (gesture grabs, physics-driven cables and tools) plus a graph-based authoring tool letting designers build training scenarios without code, with LMS integration. Held target 72–90 Hz on Quest via stereo rendering, GPU instancing, draw-call discipline, and custom shaders.
- Shipped a cross-platform C++ computer vision core with GPU-accelerated pipelines for real-time 6DOF tracking.
- Built the FormulaXR Education stack: Unity-based authoring SDK + Blazor WebAssembly / ASP.NET Core, powering browser-based science mini-games.
- Led engineering teams of up to 11 across the full lifecycle.

##### Unity Developer & Lead (2016 – 2020)

- Engineered the multiplayer Virtual Classroom (2016) for São José dos Campos City Hall: HTC Vive trackers wired to physical movable chairs, custom VR interaction toolkit + VoIP.
- Led OrtoVR (2017–2018), Unity-based orthopedic VR surgical training, presented at Feira Hospitalar 2018.
- Built the surgical interaction system for Hospital BP (2019): scalpel cuts, scissors, suturing, forceps + spatula, plus robotic arm I/O.
- Delivered the .STEP-to-Unity CAD importer through the 2018 Samsung Creative Startups program, later became XRProj's CAD pipeline.

##### Unity Developer (2015 – 2016)

- Co-founded FormulaXR and built the early production pipeline. R&D-heavy stage, small team.
- Built the Dupont VR experience for the Next Generation Dupont event.
- Built the early driving-simulator R&D prototype for GE (Logitech G27 wheel-and-pedals hardware integration).

#### Freelance Game Developer (2019 – 2024)

- **Truco Animado** (Unity, 2019): Brought in to add real-time multiplayer to an existing single-player title (1M+ Google Play downloads). Built the full networking, matchmaking, and lobby stack, plus the gameplay refactors needed to support online sessions.
- **Fox Trot** (Unity, WebGL, 2023): Endless runner. Performance optimization plus core gameplay (obstacles, collectibles, daily rewards). Playable on itch.io.
- **Rick Dangerous** (Unity, Corgi Engine, 2023): Platformer gameplay programming. Playable on itch.io.
- **VR Basketball** (Unreal 5, Meta Quest 2, 2024): Built the full VR interaction layer (grab, throw, hand presence, physics-driven ball handling) using C++ for core code + Blueprints for authoring 3 game modes.

Tech stack: Unity, C#, C++, Unreal Engine, PlayCanvas (TypeScript), FishNet, Photon PUN, Roslyn, Mono.Cecil, ASP.NET Core, Quest, iOS, Android, PC, WebGL

### Technical Skills

- **Gameplay Programming**: Player interaction systems (VR + desktop), character & vehicle controllers, physics-driven mechanics, scoring & objective systems
- **Real-Time Multiplayer**: FishNet, Photon PUN, custom RPC weaving (Roslyn + Mono.Cecil), state replication, ownership semantics, asymmetric multiplayer (VR + desktop)
- **Engine & Tools**: Editor windows, custom inspectors, source generators, IL post-processing, Asset Bundles for live content, custom shaders
- **Architecture & DI**: Dependency Injection (VContainer, Zenject), modular component patterns
- **Performance**: Stereo VR (Quest, 72–90 Hz), high-end mobile profiling (Frame Debugger, RenderDoc, OVR Metrics), draw-call & GPU optimization
- **Engines**: Unity (primary), Unreal Engine (C++/Blueprint), PlayCanvas
- **Programming**: C#, C++, TypeScript, JavaScript, Java
- **Computer Vision**: Markerless 6DOF tracking (silhouette, edge, depth), GPU-accelerated CV pipelines, native C++ runtime
- **Platforms**: Meta Quest, iOS, Android, PC, WebGL, HoloLens
- **Reality**: VR, AR, MR, XR, Spatial Computing
- **Backend**: ASP.NET Core, Blazor WebAssembly, real-time client-server communication, LMS integration
- **Physics & Animation**: Obi Physics (rope, cable, soft-body simulation), state machines, IK, procedural animation blending, hand-tracked rigs

### Game Development

- C++ gameplay in Unreal Engine 5: built the full VR interaction layer (grab, throw, hand presence, physics-driven ball handling) for VR Basketball on standalone Meta Quest 2, no Blueprints
- Real-time multiplayer rewrite for Truco Animado, an established mobile card game on Google Play (networking layer, matchmaking, lobby)
- Multiple Unity titles across genres: 2D multiplayer platformer (Mercenary Rush), Donkey Kong 2 remake, Rick Dangerous remake with a junior team I mentored, endless runner (Fox Trot), educational adventure (Sanja Runner)
- Custom Unity tools on the Asset Store (Pivot Editor)
- Currently working on an independent title for 2026

### Key Projects

- **XRProj** (xrproj.com): Multi-platform XR platform for industrial CAD visualization, collaboration, and content creation. Ships to Quest, iOS, Android, PC, and the web from one Unity codebase. Used for aircraft assembly review, packaging inspection, and infrastructure walkthroughs. Cut client training time from 5h to 3h and inspection time from 2h to 1h.
- **Virtua**: Interactive VR medical simulation for Becton Dickinson, on the Meta Quest Store and in active use across Brazil, Mexico, Colombia, Argentina, and Chile since 2021. Trains nurses on central venous catheter insertion. Originally a training product, later extended by the client into sales enablement and event activations.
- **XRTracker** (xrtracker.net): Commercial Unity SDK for markerless 6DOF object tracking. Locks onto real-world objects directly from a 3D mesh using classical computer vision – no markers, image targets, or training required. 4–8 ms/frame on mobile, sub-centimeter precision.
- **FormulaXR Education Platform** (formulaxr.com): Browser-based learning platform powering 40+ interactive science mini-games. Students drag atoms to build molecules, walk virtual ecosystems for food-chain lessons, explore an interactive periodic table, and balance forces in physics puzzles. Each mini-game is a full title with its own mechanics and scoring.
- **Virtual Classroom**: Multiplayer VR education for São José dos Campos City Hall (2016). Sessions of up to 11 users (teacher + 10 students) with HTC Vive trackers wired to physical movable chairs. Built before Unity's XR Interaction Toolkit shipped – foundation of my multiplayer stack.

### Education

**B.Sc. Computer Science — IBTA** (2011 – 2015)
Instituto Brasileiro de Tecnologia Avançada

### Languages

- Portuguese: Native
- English: Fluent (C1)

---

## Projects

Projects are tagged so they can appear under multiple categories on the live site. Tabs available: All, Games, Serious Games, Event Activations, Tools & SDKs.

### FormulaXR

${renderGroup(formulaXrProjects)}

---

### Freelance

${renderGroup(freelanceProjects)}

---

### Personal

${renderGroup(personalProjects)}

---

## Contact

Available for remote engineering roles in games, XR, simulation, and interactive 3D in general.

- Email: luizcarlos.sfx@gmail.com
- LinkedIn: https://www.linkedin.com/in/luizcarlosxr/
- GitHub: https://github.com/luizcarlosfx
- Discord: luizcarlosfx
`;

fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), output, 'utf-8');
console.log(`Generated public/llms-full.txt (${allProjects.length} projects)`);
