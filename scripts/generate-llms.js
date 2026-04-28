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

> Senior Unity Engineer with 10+ years on interactive 3D systems. Unity day-to-day, with Unreal and C++ where they fit. Gameplay, real-time multiplayer, and editor tooling, with cross-platform delivery across Quest, iOS, Android, PC, and the web.
> Founder and CTO of FormulaXR. Production VR/AR titles live on the Meta Quest Store, App Store, and Google Play, in active use for years.

Website: https://luizcarlosfx.github.io
Email: luizcarlos.sfx@gmail.com
LinkedIn: https://www.linkedin.com/in/luizcarlosxr/
GitHub: https://github.com/luizcarlosfx
Discord: luizcarlosfx

I founded FormulaXR in 2015 and have been its CTO ever since. In a small company, that role spans well beyond the technical work: I'm lead developer and architect, but also team lead, regularly on calls and visits with clients, and one of the people shaping company strategy. Over those years the work has spanned a pretty broad range: games, medical VR training, industrial simulation, educational mini-games, and a markerless object tracking SDK. I tend to be involved end to end, from initial concept through the publishing process. Available for remote work.

---

## Resume

### Experience

#### Founder & CTO — FormulaXR (2015 – Present)

- Architected XRProj, a real-time 3D platform shipping from one codebase to Quest, iOS, Android, PC, and the web. On the Meta Quest Store, App Store, and Google Play; in production since 2019 by Embraer, Nestlé, Ball Corporation, and Aegea
- The web target is a hand-built PlayCanvas/TypeScript port of the Unity client. Component-by-component, with a custom serialization layer that mirrors the Unity runtime. Written before LLMs existed, and the mirroring was the slow part
- Networking compatibility layer over Fish-Net, using Roslyn source generators and Mono.Cecil IL post-processing to weave RPCs at compile time. Migrated a production multiplayer codebase off Photon while keeping SyncVar/RPC/ownership semantics intact
- Gameplay systems and scoring evaluators across VR training titles (medical, surgical, industrial), including Virtua for Becton Dickinson on the Meta Quest Store, in use since 2021 across Brazil, Mexico, Colombia, Argentina, and Chile
- Built and shipped XRTracker, a commercial Unity SDK for markerless 6DOF tracking. Native C++ CV core, GPU-accelerated rendering, in-editor tracking-model pipeline (FBX, OBJ, glTF)
- Shared Unity SDK powering 40+ interactive science mini-games on the FormulaXR education portal, with a Blazor WebAssembly + .NET Core frontend and a WebGL communication bridge that reports trainee progress and scoring back in real time
- Performance optimization for Quest and high-end mobile (stereo rendering, 72–90 Hz, draw-call discipline, GPU instancing, custom shaders)
- Asset Bundles for runtime content loading
- Led cross-functional teams across full project lifecycles, from client discovery and technical scoping through architecture, development, and delivery

Tech stack: Unity, C#, C++, Unreal Engine, PlayCanvas (TypeScript), FishNet, Photon PUN, Roslyn, Mono.Cecil, ASP.NET Core, Quest, iOS, Android, PC, WebGL

### Technical Skills

- **Gameplay Programming**: Player interaction systems (VR + desktop), character & vehicle controllers, physics-driven mechanics, scoring & objective systems
- **Real-Time Multiplayer**: FishNet, Photon PUN, custom RPC weaving (Roslyn + Mono.Cecil), state replication, ownership semantics, asymmetric multiplayer (VR + desktop)
- **Engine & Tools**: Editor windows, custom inspectors, source generators, IL post-processing, Asset Bundles for live content, custom shaders
- **Performance**: Stereo VR (Quest, 72–90 Hz), high-end mobile profiling (Frame Debugger, RenderDoc, OVR Metrics), draw-call & GPU optimization
- **Engines**: Unity (primary), Unreal Engine (C++/Blueprint), PlayCanvas
- **Programming**: C#, C++, TypeScript, JavaScript, Java
- **Computer Vision**: Markerless 6DOF tracking (silhouette, edge, depth), GPU-accelerated CV pipelines, native C++ runtime
- **Platforms**: Meta Quest, iOS, Android, PC, WebGL, HoloLens
- **Backend**: ASP.NET Core, real-time client-server communication, LMS integration

### Game Development

- C++ gameplay in Unreal Engine 5: built the full VR interaction layer (grab, throw, hand presence, physics-driven ball handling) for VR Basketball on standalone Meta Quest 2, no Blueprints
- Real-time multiplayer rewrite for Truco Animado, an established mobile card game on Google Play (networking layer, matchmaking, lobby)
- Multiple Unity titles across genres: 2D multiplayer platformer (Mercenary Rush), Donkey Kong 2 remake, Rick Dangerous remake with a junior team I mentored, endless runner (Fox Trot), educational adventure (Sanja Runner)
- Custom Unity tools on the Asset Store (Pivot Editor)
- Currently working on an independent title for 2026

### Key Projects

- **XRProj** (xrproj.com): Multi-platform real-time 3D system shipping to Quest (Meta Quest Store), mobile (App Store, Google Play), PC, and web (custom PlayCanvas/TypeScript port). In production use since 2019.
- **Virtua**: Interactive VR medical simulation shipped to Becton Dickinson on the Meta Quest Store. In use across 5 countries since 2021. Custom Roslyn + Mono.Cecil networking compatibility layer.
- **XRTracker** (xrtracker.net): Commercial Unity SDK for markerless 6DOF tracking. Native C++ CV core, 4–8 ms/frame on mobile.
- **VR Basketball**: Unreal Engine 5 / C++ VR title targeting standalone Meta Quest 2.

### Education

**B.Sc. Computer Science — IBTA** (2011 – 2015)
Instituto Brasileiro de Tecnologia Avançada

### Languages

- Portuguese: Native
- English: Professional

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
