import ProjectData from '@/data/ProjectData.ts'

export const allProjects = [
    // ===== FormulaXR =====
    new ProjectData("xrproj", "XRProj", "img/projects/xrproj.png",
    `
    <div class="paragraph">
        <strong>XRProj</strong> is a multi-platform real-time 3D platform that ships from one codebase to Quest, iOS, Android, PC (VR), HoloLens, and the web. Published on the <strong>Meta Quest Store, Apple App Store, and Google Play</strong>, in production since 2019.
    </div>
    <div class="paragraph">
        I've been the Lead Developer and Architect from day one, with the project under long-running continuous development. Used in production by <strong>Embraer</strong> (aircraft assembly review on Quest), and by <strong>Nestl&eacute;, Ball Corporation, and Aegea</strong> for collaborative 3D review and assembly validation. Distribution is enterprise/B2B rather than consumer, but the apps have been live on every major mobile and VR store since 2019.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/DJRpeYrGH80" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/sIcZepSxKfo" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Led the architecture from concept to production</li>
            <li>The web target is a hand-built <strong>PlayCanvas/TypeScript</strong> port of the Unity client. Component-by-component, with a custom serialization layer that mirrors the Unity runtime. Written before LLMs existed; the mirroring was the slow part</li>
            <li>Real-time multiplayer, originally on Photon PUN, later migrated to a custom Fish-Net layer with <strong>Roslyn source generators and Mono.Cecil IL post-processing</strong> that preserves SyncVar/RPC/ownership semantics (shared with Virtua)</li>
            <li>Performance optimization for Quest (stereo, 72&ndash;90 Hz) and high-end mobile (iOS, Android)</li>
            <li>Native CAD-to-runtime model conversion pipeline (CAD and polygon formats)</li>
            <li>Backend services in ASP.NET Core</li>
            <li>Led cross-functional teams across the full lifecycle</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Learn more at <a href="https://www.xrproj.com" target="_blank">xrproj.com</a>
        </div>
    </div>
    `, "#50C7BD", "formulaxr", ["tools-sdks"]),

    new ProjectData("xrtracker", "XRTracker", "img/projects/xrtracker.png",
    `
    <div class="paragraph">
        <strong>XRTracker</strong> is a commercial Unity SDK for markerless 3D object tracking. 6DOF pose estimation with sub-centimeter precision. No scanning, markers, or cloud training required. Other developers drop it into their own Unity projects.
    </div>
    <div class="paragraph">
        Built ground-up with a <strong>native C++ computer vision core and GPU-accelerated rendering</strong>. Runs at <strong>4&ndash;8 ms per frame on mobile</strong>. Three tracking algorithms (silhouette, edge, depth) can be composed for robustness in low-light and low-contrast environments.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/lMmO5UwQI-o" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/SDSiPCIFLNc" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key features:
        <ul>
            <li>Native C++ runtime + GPU pipelines, integrated as a Unity SDK</li>
            <li>Three composable tracking algorithms (silhouette, edge, depth)</li>
            <li>In-editor authoring tooling: tracking model generation from any 3D mesh (FBX, OBJ, glTF) directly in the editor, with no-code setup through the Inspector</li>
            <li>Cross-platform: Windows, iOS (ARKit), Android (ARCore)</li>
            <li>Designed for Industry 4.0: Poka-Yoke workflows, assembly guidance, and task validation</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Visit <a href="https://xrtracker.net" target="_blank">xrtracker.net</a> or read the <a href="https://docs.xrtracker.net" target="_blank">documentation</a>
        </div>
    </div>
    `, "#04AAB2", "formulaxr", ["tools-sdks"]),

    new ProjectData("virtua", "Virtua — Interactive Medical Simulation", "img/projects/virtua.png",
    `
    <div class="paragraph">
        <strong>Virtua</strong> is an interactive VR medical simulation developed for <strong>Becton Dickinson (BD)</strong>. Nurses put on a headset and practice central venous catheter insertion in VR before doing it on a real patient. <strong>Published on the Meta Quest Store</strong>, in production since 2021 across <strong>Brazil, Mexico, Colombia, Argentina, and Chile</strong>. Distribution is B2B rather than consumer, but the app has been live on the store and in active use for over 5 years.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/AmMjGSMS-zs" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        It started as a PC + Oculus Rift project (Quest 2 didn't exist yet, and earlier Quest hardware wasn't good enough). Later I ported the whole thing to standalone Quest 2+. Both targets now ship from the same codebase: PC (with Rift or Quest 2+ via Link) and Quest 2+ standalone.
    </div>
    <div class="paragraph">
        The bulk of the engineering was the interaction layer. Hand-tracking gestures map to grabbing equipment, with the gesture input blended into procedural animations so the grip looks and feels natural rather than mechanical. Catheter tubing has its own physics-driven cable system. Nurses operate an ultrasound device to locate the vein, do the needle puncture (<em>puncionamento com agulha</em>), and assemble the catheter kit piece by piece. Wherever I could, components are interactable rather than scripted.
    </div>
    <div class="paragraph">
        Above the interactions, there's the <strong>objective system</strong>, a step-by-step procedure builder. Non-engineers can author training sequences without touching code, and a configurable scoring pass grades each action in real time.
    </div>
    <div class="paragraph">
        In 2024, the client needed the online multiplayer to also work locally without internet, and Photon's licensing costs for industry use were prohibitive. I <strong>migrated the entire networking layer from Photon to Fish-Net</strong>. To minimize risk in a large production codebase, I built a <strong>compatibility layer on top of Fish-Net</strong> that preserved the same architecture and API surface (SyncVars, RPCs, and ownership semantics all behaved identically to the original Photon implementation). This required <strong>Roslyn source generators</strong> for RPC method scaffolding and <strong>IL post-processing</strong> (Mono.Cecil) to rewrite RPC call sites at compile time.
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Interaction layer: gesture grabs with animation blending, catheter cable physics, ultrasound, needle puncture, component-level catheter assembly</li>
            <li>PC + Rift to Quest 2+ standalone port, single codebase for both targets</li>
            <li>Step-by-step objective/procedure system for non-engineer authoring</li>
            <li>Configurable scoring evaluator</li>
            <li>Runtime content loading via <strong>Asset Bundles</strong></li>
            <li>Photon to Fish-Net networking migration with a custom RPC-weaving compat layer (Roslyn codegen + Mono.Cecil IL post-processing)</li>
            <li>LMS integration for trainee progress and certification</li>
        </ul>
    </div>
    `, "#FF6F00", "formulaxr", ["serious-games"]),

    new ProjectData("edu-portal", "FormulaXR — Educational Portal", "img/projects/edu-portal.png", `
    <div class="paragraph">
        A web platform hosting <strong>40+ interactive science mini-games</strong> built in Unity. Students drag atoms to build molecules, walk through a virtual ecosystem to learn about food chains, explore an interactive periodic table, balance forces in physics puzzles, and so on. Each one is a small playable title with its own mechanics, scoring, and objectives.
    </div>
    <div class="paragraph">
        I architected the <strong>shared Unity SDK</strong> that all 40+ titles are built on: interaction primitives, scoring, objective tracking, and a WebGL communication bridge that talks back to the portal in real time.
    </div>
    <div class="paragraph">
        I also built the web portal itself, full-stack, in ASP.NET Core and Blazor WebAssembly (student accounts, progress tracking, scoring, reporting).
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/iDR3EGaFzZI" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Shared Unity SDK powering all 40+ mini-games (interaction primitives, scoring, objectives)</li>
            <li>WebGL-to-portal communication bridge for student progress and scoring</li>
            <li>Full-stack web portal (ASP.NET Core + Blazor WebAssembly)</li>
            <li>Student tracking, scoring, and reporting</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Visit <a href="https://formulaxr.com" target="_blank">formulaxr.com</a>
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/edu-portal-home.png" alt="Portal homepage" />
        <img class="pc-screenshot" src="img/projects/edu-portal-simulation.png" alt="Interactive periodic table simulation" />
    </div>
    `, "#10A5DC", "formulaxr", ["games", "serious-games"]),

    new ProjectData("ortovr", "OrtoVR — Surgical Training", "img/projects/ortovr.png",
    `
    <div class="paragraph">
        <strong>OrtoVR</strong> is a surgical VR training title built for <strong>Ortos&iacute;ntese</strong>, a Brazilian orthopedic company. Surgeons put on a headset and practice placing implants and handling surgical instruments in VR before entering the operating room. Featured as a key demonstration at a major healthcare fair in 2018.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/yU6mq5-gpb8?start=302" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Set up the full project structure</li>
            <li>Step-by-step <strong>objective system</strong> for guided procedure progression</li>
            <li>Refined a custom VR interaction layer for precise instrument handling</li>
            <li>Real-time multiplayer for collaborative training sessions</li>
        </ul>
    </div>
    `, "#E91E63", "formulaxr", ["serious-games"]),

    new ProjectData("vr-surgery", "VR Surgery — Hospital BP", "img/projects/vr-surgery.png",
    `
    <div class="paragraph">
        A <strong>proof-of-concept</strong> for <strong>Hospital Benefic&ecirc;ncia Portuguesa de S&atilde;o Paulo (BP)</strong>, among the world's best hospitals for seven consecutive years. The surgeon wears a VR headset and drives a real robotic arm through simulated procedures. Hand movements in VR, real arm in the room, in sync.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/xIl3_2Z3_X0" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Most of my time went into the <strong>surgical interaction system</strong>: scalpel incisions through skin, scissors cutting vessels, suturing, fat removal with forceps and a spatula together. Each tool has its own physical behavior, with the goal that procedures feel like the real thing instead of triggered animations.
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Surgical interaction system: scalpel incisions, scissor cutting on vessels, suturing, forceps + spatula fat removal</li>
            <li>Hardware drivers for the robotic arm (custom peripheral I/O)</li>
            <li>VR interaction layer and UI</li>
            <li>Refactored and stabilized the existing codebase</li>
        </ul>
    </div>
    `, "#1565C0", "formulaxr", ["serious-games"]),

    new ProjectData("forklift-vr", "Forklift Safety Training", "img/projects/forklift-vr.png", `
    <div class="paragraph">
        A <strong>VR forklift simulator</strong> for <strong>Nestl&eacute;</strong>. Before driving a real forklift in the warehouse, operators put on a Quest headset and go through the safety steps: pre-operation inspection, environment awareness, load handling. Each step is scored in real time and the result is reported back.
    </div>
    <div class="paragraph">
        Built in Unity for standalone Meta Quest.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/rGpxLB2ws8I" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ZTwBLDFgxso" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full development of the simulator</li>
            <li>Real-time scoring with step-based progression</li>
            <li><strong>Vehicle physics and controls</strong> tuned for VR</li>
            <li>Performance optimization for standalone Quest (stereo, 72 Hz)</li>
        </ul>
    </div>
    `, "#E10A14", "formulaxr", ["serious-games"]),

    new ProjectData("painter-sim", "Industrial Painter Simulator", "img/projects/painter-sim.png", `
    <div class="paragraph">
        Multi-user simulation of an industrial painting machine, built for a major multinational corporation. One person wears a VR headset and walks around the virtual machine while teammates on their laptops observe and annotate from a desktop client. <strong>Both share the same world in real time</strong>, with different inputs and views per role.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/jnUIvtkdHCs" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full development of the codebase</li>
            <li>Real-time multiplayer with simultaneous VR and desktop participants</li>
            <li>Layer system and animation logic for the painting machine</li>
            <li>Cross-platform client (VR headset + non-VR desktop) from a single codebase</li>
        </ul>
    </div>
    `, "#607D8B", "formulaxr", ["serious-games"]),

    new ProjectData("vr-classroom", "Virtual Classroom", "img/projects/vr-classroom.png",
    `
    <div class="paragraph">
        A <strong>multiplayer VR classroom</strong>, built in collaboration with the City Hall of S&atilde;o Jos&eacute; dos Campos, Brazil. Students wearing VR headsets join the same virtual classroom from different locations and attend interactive lessons together. This is also where my reusable <strong>VR interaction layer and networking code</strong> first came together. Most of my later VR projects still build on what I wrote here.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/8lTZSyZExXM" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/SSbevc_ezho" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Extensible VR interaction layer (teleportation, object manipulation) reused across later projects</li>
            <li>Modular multiplayer layer designed for easy extension</li>
            <li>Performance work for smooth multiplayer sessions</li>
        </ul>
    </div>
    `, "#1976D2", "formulaxr", ["serious-games"]),

    new ProjectData("hyundai-vr", "Hyundai — VR Archery", "img/projects/hyundai-vr.png", `
    <div class="paragraph">
        A <strong>VR archery game</strong> developed for <strong>Hyundai</strong> as a brand activation at the 2017 Auto Show (<em>Feira do Autom&oacute;vel</em>). Visitors at the Hyundai booth put on a headset, grabbed a controller like a bow, and competed in an archery challenge.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/KMV1TCsMhX8" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full development of the VR game</li>
            <li>Archery mechanics and physics for VR controllers</li>
            <li>Event-ready experience optimized for booth demonstrations</li>
        </ul>
    </div>
    `, "#002C5F", "formulaxr", ["games", "event-activations"]),

    new ProjectData("vr-racing", "VR Racing Game", "img/projects/vr-racing.png",
    `
    <div class="paragraph">
        A <strong>VR racing game</strong> developed for a Brazilian motorized wheelchair company and showcased at <strong>Rock in Rio 2017</strong>, one of the world's largest music festivals. Festival-goers sat in the wheelchair, grabbed the handlebars, and raced each other on a virtual track.
    </div>
    <div class="paragraph">
        A key challenge was integrating an <strong>HTC Vive Tracker</strong> mounted on the wheelchair's handlebar. The tracker captures the real steering input and maps it directly to the in-game vehicle controls.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/1reoW8gjKrw" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Integrated HTC Vive Tracker for real-world handlebar-to-game steering input</li>
            <li>Customized Unity's vehicle physics system for wheelchair-based controls</li>
            <li>Implemented multiplayer racing for competitive on-site play</li>
        </ul>
    </div>
    `, "#212121", "formulaxr", ["games", "event-activations"]),

    new ProjectData("sanja-runner", "Sanja Runner", "img/projects/sanja-runner.png", `
    <div class="paragraph">
        <strong>Sanja Runner</strong> is an educational 2D adventure game developed in 2016 for the city of S&atilde;o Jos&eacute; dos Campos, Brazil. Players run through five levels based on real tourist landmarks (Parque do Banhado, Parque Vicentina Aranha, and others), collecting scrolls with educational content and answering quizzes along the way.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/inHtwPzmylE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Built for PC and Android, the game features a content management system that lets educators customize scrolls and quiz questions through a web interface, making it adaptable for different subjects and learning goals.
    </div>
    `, "#689F38", "formulaxr", ["games"]),

    new ProjectData("wind-tunnel", "Wind Tunnel — Samsung Creative Startups", "img/projects/wind-tunnel.jpg", `
    <div class="paragraph">
        Multi-user wind tunnel simulation developed during FormulaXR's participation in the <strong><a href="https://news.samsung.com/br/samsung-creative-startups-divulga-12-startups-selecionadas-para-a-4a-rodada-do-programa-de-aceleracao" target="_blank">Samsung Creative Startups</a></strong> investment program (2018). Fluid dynamics created in <strong>Maya</strong>, visualized as a <strong>multi-user experience in Unity</strong>. I developed the <strong>Unity visualization and networking</strong>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/JdSvBvm7Fxc" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#1428A0", "formulaxr", ["serious-games"]),

    new ProjectData("dupont-vr", "DuPont — VR Product Tour", "img/projects/dupont-vr.png", `
    <div class="paragraph">
        VR city tour shown at <strong>DuPont</strong>'s internal event <strong>"Next Generation DuPont"</strong> (3 days, <strong>800+ attendees</strong>). Users explored a virtual city highlighting DuPont products in everyday environments. Built on the <strong>Oculus DK2</strong>; I did <strong>full development</strong> of the VR experience.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/KZkpDJGheIk" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/dupont-event-1.jpg" alt="DuPont Next Generation event" />
        <img class="pc-screenshot" src="img/projects/dupont-event-2.jpg" alt="Attendees experiencing the VR tour" />
        <img class="pc-screenshot" src="img/projects/dupont-event-3.jpg" alt="Event booth" />
    </div>
    `, "#C8102E", "formulaxr", ["event-activations"]),

    new ProjectData("ortosintese-fh", "Ortosíntese — Feira Hospitalar 2019", "img/projects/ortosintese-fh.jpg", `
    <div class="paragraph">
        <strong>Unreal Engine</strong> VR product showcase for <strong><a href="https://ortosintese.com.br/" target="_blank">Ortos&iacute;ntese</a></strong>, presented at <strong>Feira Hospitalar 2019</strong> (largest healthcare trade fair in Latin America). I developed the <strong>VR navigation and basic interactivity</strong> for exploring their orthopedic equipment catalog.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/P80BQk8bIBU" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#E91E63", "formulaxr", ["event-activations"]),

    new ProjectData("climatempo-vr", "Climatempo — VR Experience", "img/projects/climatempo-vr.png", `
    <div class="paragraph">
        VR experience presented at the <strong>RM Vale 2016</strong> event for <strong><a href="https://www.climatempo.com.br/" target="_blank">Climatempo</a></strong> and <strong>Kersys</strong>. I did <strong>full development</strong> of the application. Interactive scenes let users explore weather and environmental data in VR.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/-JgiY85GKkc" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#FFA000", "formulaxr", ["event-activations"]),

    new ProjectData("casa-fitness", "Casa do Fitness — VR Showroom", "img/projects/casa-fitness.jpg", `
    <div class="paragraph">
        <strong>Unreal Engine</strong> VR showroom for <strong><a href="https://www.casadofitness.com.br/" target="_blank">Casa do Fitness</a></strong>, a Brazilian fitness equipment retailer. I developed the <strong>VR navigation and interaction system</strong> within the environment built by the art team.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/cjIBSUD5deM" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#DD2C00", "formulaxr", ["event-activations"]),

    // ===== Freelance =====
    new ProjectData("vr-basketball", "VR Basketball", "img/projects/vr-basketball.png",
    `
    <div class="paragraph">
        <strong>VR Basketball</strong> is a freelance VR title built in <strong>Unreal Engine 5 with C++</strong> for standalone <strong>Meta Quest 2</strong>. You reach out, grab the ball, throw it, and the ball curves and spins realistically. <strong>Everything is in C++, no Blueprints.</strong>
    </div>
    <div class="paragraph">
        I wrote the VR interaction layer myself in C++: hand presence, grab mechanics, physics-driven ball throwing, scoring loop. Everything runs natively on the Quest 2 with no PC required, on a standalone-mobile frame budget.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/rLnq_LxKHoE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key highlights:
        <ul>
            <li>C++ VR interaction layer (grab, throw, hand presence)</li>
            <li>Physics-driven ball handling with realistic trajectory and spin</li>
            <li>Scoring loop with multiple court positions</li>
            <li>Optimized for standalone Meta Quest 2 (stereo, 72&ndash;90 Hz)</li>
        </ul>
    </div>
    `, "#E65100", "freelance", ["games"]),

    new ProjectData("truco-animado", "Truco Animado — Multiplayer Rewrite", "img/projects/truco-animado.png",
    `
    <div class="paragraph">
        <strong>Truco Animado</strong> is an established mobile card game on Google Play (Truco is one of Brazil's most popular card games). I was brought in as a freelancer to <strong>architect and ship the real-time multiplayer rewrite</strong> on top of an existing single-player codebase that already had a large player base.
    </div>
    <div class="paragraph">
        My scope was specifically the networking layer, not the game design or content. After the multiplayer milestone shipped I handed the code back. The game's existing popularity on Google Play predates my work and stands on its own.
    </div>
    <div class="paragraph">
        Key contributions (multiplayer rewrite only):
        <ul>
            <li>Architected and implemented the real-time multiplayer networking layer</li>
            <li>Developed the matchmaking and lobby system</li>
            <li>Refactored core gameplay systems where required to support reliable online play</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Available on <a href="https://play.google.com/store/apps/details?id=br.com.delotech.trucoindie" target="_blank">Google Play</a>
        </div>
    </div>
    `, "#2E7D32", "freelance", ["games"]),

    new ProjectData("rick-dangerous", "Rick Dangerous — Remake", "img/projects/rick-dangerous.png",
    `
    <div class="paragraph">
        A remake of the classic arcade game <strong>Rick Dangerous</strong>, developed as a freelance mentorship-driven project where I guided a team of junior artists and developers through the full game development process.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/MZVmhxrgpsE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Led and mentored a team of junior developers and artists</li>
            <li>Established workflows and taught fundamental game development skills</li>
            <li>Built the character system, trap mechanics, and NPC behaviors</li>
            <li>Created reusable prefabs and tilemaps for level designers</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://luizcarlosfx.itch.io/rick-dangerous" target="_blank">itch.io</a>
        </div>
    </div>
    `, "#6D4C41", "freelance", ["games"]),

    new ProjectData("fox-trot", "Fox Trot", "img/projects/fox-trot.png",
    `
    <div class="paragraph">
        <strong>Fox Trot</strong> is an endless runner game built for WebGL. Brought in as a freelancer to optimize performance and develop the core gameplay systems including obstacle, collectible, and daily reward mechanics.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/s0U8bGTIkNo" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Optimized the project for smooth WebGL performance</li>
            <li>Developed core gameplay systems (obstacles, collectibles, daily rewards)</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://luizcarlosfx.itch.io/foxtrot" target="_blank">itch.io</a>
        </div>
    </div>
    `, "#FF8F00", "freelance", ["games"]),

    // ===== Personal =====
    new ProjectData("pivot-editor", "Pivot Editor", "img/projects/pivot-editor.png",
    `
    <div class="paragraph">
        <strong>Pivot Editor</strong> is a Unity Editor extension published on the Unity Asset Store that allows developers to visually edit mesh pivot points directly in the editor using handle-based controls.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/r5iluHpuyZE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Designed and built the custom Editor Window</li>
            <li>Implemented pivot manipulation logic with visual handles</li>
            <li>Published and maintained the asset on the Unity Asset Store</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Available on the <a href="http://u3d.as/kT1" target="_blank">Unity Asset Store</a>
        </div>
    </div>
    `, "#424242", "personal", ["tools-sdks"]),

    new ProjectData("mercenary-rush", "Mercenary Rush", "img/projects/mercenary-rush.png",
    `
    <div class="paragraph">
        <strong>Mercenary Rush</strong> is a 2D multiplayer platformer developed as a capstone project during my Computer Science degree. The project pushed me hard on real-time networking, Unity's Mecanim animation system, and custom editor tooling.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/6Mq_5XopKMI" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/LHyG7JLcBWw" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Built a responsive 2D platformer character controller</li>
            <li>Implemented real-time networking for fast-paced multiplayer gameplay</li>
            <li>Created custom editor tools (inspectors, windows, menus) for rapid iteration</li>
        </ul>
    </div>
    `, "#6A1B9A", "personal", ["games"]),

    new ProjectData("dk-clone", "Donkey Kong 2 — Clone", "img/projects/dk-clone.png",
    `
    <div class="paragraph">
        A love letter to my childhood favorite, a faithful recreation of <strong>Donkey Kong</strong> built in Unity. With no dedicated artist on the team, I collected sprites from community resources and built custom editor tools to streamline the asset pipeline.
    </div>
    <div class="paragraph">
        <div class="notice">
            Watch the development playlist on <a href="https://www.youtube.com/playlist?list=PLedBjvIQnDOFqD_1fc-kaYi6rJwkAHIXX" target="_blank">YouTube</a>
        </div>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Built custom editor tools for sprite cutting and positioning from raw spritesheets</li>
            <li>Developed a 2D character controller with dual playable characters</li>
            <li>Created collectible, damage, and NPC systems</li>
        </ul>
    </div>
    `, "#C62828", "personal", ["games"]),
];

// Order definitions for each tab. Each tab knows which projects appear and in what order.
// "all" is special: it groups projects by origin with section headers.

export const tabOrders: Record<string, string[]> = {
    games: [
        "vr-basketball",
        "truco-animado",
        "rick-dangerous",
        "fox-trot",
        "hyundai-vr",
        "vr-racing",
        "sanja-runner",
        "edu-portal",
        "mercenary-rush",
        "dk-clone",
    ],
    "serious-games": [
        "virtua",
        "ortovr",
        "vr-surgery",
        "edu-portal",
        "forklift-vr",
        "painter-sim",
        "vr-classroom",
        "wind-tunnel",
    ],
    "event-activations": [
        "hyundai-vr",
        "vr-racing",
        "dupont-vr",
        "ortosintese-fh",
        "climatempo-vr",
        "casa-fitness",
    ],
    "tools-sdks": [
        "xrproj",
        "xrtracker",
        "pivot-editor",
    ],
};

// "all" view groups by origin in this order. Each group has projects in a specific order.
export const allViewGroups: { title: string; projectIds: string[] }[] = [
    {
        title: "FormulaXR",
        projectIds: [
            "xrproj",
            "xrtracker",
            "virtua",
            "edu-portal",
            "ortovr",
            "vr-surgery",
            "vr-classroom",
            "forklift-vr",
            "painter-sim",
            "hyundai-vr",
            "vr-racing",
            "dupont-vr",
            "casa-fitness",
            "wind-tunnel",
            "ortosintese-fh",
            "climatempo-vr",
            "sanja-runner",
        ],
    },
    {
        title: "Freelance",
        projectIds: [
            "vr-basketball",
            "truco-animado",
            "rick-dangerous",
            "fox-trot",
        ],
    },
    {
        title: "Personal",
        projectIds: [
            "pivot-editor",
            "mercenary-rush",
            "dk-clone",
        ],
    },
];
