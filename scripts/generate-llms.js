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

  const regex = /new ProjectData\(\s*"([^"]*)",\s*"([^"]*)",\s*"[^"]*",\s*`([\s\S]*?)`,/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    projects.push({
      id: match[1],
      name: match[2],
      description: stripHtml(match[3]),
    });
  }
  return projects;
}

const gameProjects = parseProjects(path.join(__dirname, '..', 'src', 'data', 'GameProjectsData.ts'));
const otherProjects = parseProjects(path.join(__dirname, '..', 'src', 'data', 'OtherProjectsData.ts'));

const output = `# Luiz Carlos da Silva Junior — Portfolio

> XR Engineer with 10+ years of experience architecting real-time 3D systems in Unity for industrial, medical, and training applications.
> Founder and CTO of FormulaXR, delivering production XR platforms to companies including Embraer, Nestlé, and Becton Dickinson.

Website: https://luizcarlosfx.github.io
Email: luizcarlos.sfx@gmail.com
LinkedIn: https://www.linkedin.com/in/luizcarloxr/
GitHub: https://github.com/luizcarlosfx
Discord: luizcarlosfx

Specialized in cross-platform XR architecture (Quest, mobile, PC, WebGL), real-time networking, and performance optimization for constrained devices. Available for remote work.

---

## Resume

### Experience

#### Founder & CTO — FormulaXR (2015 – Present)

- Architected XRProj, a multi-platform XR content creation system (VR, AR, mobile, PC, WebGL) adopted by Embraer, Nestlé, Ball Corporation, and Aegea
- Delivered VR surgical training simulations for Becton Dickinson, Ortosíntese, and Hospital Beneficência Portuguesa, enabling scalable training with LMS integration and step-by-step evaluation systems
- Built and shipped XRTracker, a commercial Unity plugin for markerless 6DOF object tracking using custom computer vision
- Migrated a production multiplayer medical VR platform from Photon PUN to FishNet, improving scalability and reducing hosting costs
- Led cross-functional teams across full project lifecycles, from client discovery and technical scoping through architecture, development, and delivery

Tech stack: Unity, C#, Photon PUN, FishNet, ASP.NET Core, WebGL, Quest, HoloLens, Android, iOS

### Technical Skills

- **XR Development**: VR / AR / MR (Unity — primary, Unreal Engine)
- **Programming**: C#, C++, JavaScript, TypeScript, Java
- **Networking**: Photon PUN, FishNet, Netcode for GameObjects, real-time multiplayer architectures
- **Real-Time Systems**: Interaction systems, simulation, object tracking, computer vision
- **Performance**: Optimization for mobile VR (Quest, Android, iOS)
- **Backend**: ASP.NET Core
- **Platforms**: Quest, PC, Mobile, WebGL

### Game Development

- Implemented real-time multiplayer networking for a mobile game with 1M+ downloads and a 4.6 rating
- Developed a VR basketball experience using Unreal Engine for Meta Quest
- Developed gameplay systems using Unreal Engine's Gameplay Ability System (GAS)
- Currently developing an independent title for release in 2026

### Education

**B.Sc. Computer Science — IBTA** (2011 – 2015)
Instituto Brasileiro de Tecnologia Avançada

### Languages

- Portuguese: Native
- English: Conversational

---

## Industry & Simulation Projects

${gameProjects.map(p => `### ${p.name}\n\n${p.description}`).join('\n\n---\n\n')}

---

## Games & Tools

${otherProjects.map(p => `### ${p.name}\n\n${p.description}`).join('\n\n---\n\n')}

---

## Contact

Available for remote XR engineering and game development roles. Whether it's industrial simulations, medical training, or shipping a game — I'm interested.

- Email: luizcarlos.sfx@gmail.com
- LinkedIn: https://www.linkedin.com/in/luizcarloxr/
- GitHub: https://github.com/luizcarlosfx
- Discord: luizcarlosfx
`;

fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), output, 'utf-8');
console.log('Generated public/llms-full.txt');
