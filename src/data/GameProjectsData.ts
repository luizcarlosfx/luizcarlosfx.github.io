import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("xrproj", "XRProj", "img/projects/xrproj.png",
    `
    <div class="paragraph">
        <strong>XRProj</strong> is a production multi-platform XR content creation system that enables teams to bring CAD projects into VR (PC and Quest), AR (Android and iOS), HoloLens, and WebGL — all from a single unified pipeline.
    </div>
    <div class="paragraph">
        As <strong>Lead Developer and Architect</strong>, I drove this project from initial concept through nearly four years of continuous development, building every major system including real-time networking, serialization, and cross-platform deployment.
    </div>
    <div class="paragraph">
        Adopted by <strong>Embraer, Nestl&eacute;, Ball Corporation, and Aegea</strong> for CAD visualization, assembly validation, and collaborative design review.
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
            <li>Architected the full project from concept to production</li>
            <li>Performance optimization for constrained platforms (Quest, Android, iOS)</li>
            <li>Built native CAD-to-XR model conversion pipeline (CAD and polygon formats)</li>
            <li>Implemented real-time multi-user system using Photon Unity Networking</li>
            <li>Developed and integrated backend services (ASP.NET Core)</li>
            <li>Led cross-functional teams across full project lifecycle</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Learn more at <a href="https://www.xrproj.com" target="_blank">xrproj.com</a>
        </div>
    </div>
    `, "#2196F3", true),

    new ProjectData("xrtracker", "XRTracker", "img/projects/xrtracker.png",
    `
    <div class="paragraph">
        <strong>XRTracker</strong> is a markerless 3D object tracking SDK for Unity that delivers <strong>6DOF pose estimation with sub-centimeter precision</strong> — no scanning, markers, or cloud training required.
    </div>
    <div class="paragraph">
        Built from the ground up with a <strong>native C++ computer vision core and GPU-accelerated rendering</strong>, it achieves 4–8ms per frame on mobile devices. Three tracking algorithms — silhouette, edge, and depth — can be used individually or combined for maximum robustness, even in low-light and low-contrast industrial environments.
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
            <li>Markerless model-based tracking with three composable algorithms (silhouette, edge, depth)</li>
            <li>No-code setup — fully configurable through the Unity Inspector</li>
            <li>Tracking model generation from any 3D mesh (FBX, OBJ, glTF) directly in the editor</li>
            <li>Cross-platform: Windows, iOS (ARKit), Android (ARCore)</li>
            <li>Designed for Industry 4.0: Poka-Yoke workflows, assembly guidance, and task validation</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Visit <a href="https://xrtracker.net" target="_blank">xrtracker.net</a> or read the <a href="https://docs.xrtracker.net" target="_blank">documentation</a>
        </div>
    </div>
    `, "#4CAF50", true),

    new ProjectData("virtua", "Virtua — Medical VR Training", "img/projects/virtua.png",
    `
    <div class="paragraph">
        <strong>Virtua</strong> is a VR medical training platform developed for <strong>Becton Dickinson (BD)</strong>, a multinational healthcare company. The application trains healthcare professionals on catheter system procedures, and doubles as a sales demonstration tool for hospital procurement teams.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/AmMjGSMS-zs" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        A key innovation was the <strong>artist-friendly task authoring system</strong> — a step-by-step procedure builder that allows medical content creators to define training sequences without any programming knowledge.
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Designed and built an extensible task system for step-by-step medical procedures</li>
            <li>Developed a grading and evaluation system with configurable action assessments</li>
            <li>Integrated with BD's Learning Management System (LMS) for tracking and certification</li>
            <li>Built runtime procedure loading via Asset Bundles for content scalability</li>
        </ul>
    </div>
    `, "#9C27B0"),

    new ProjectData("edu-portal", "FormulaXR — Educational Portal", "img/projects/edu-portal.png", `
    <div class="paragraph">
        A <strong>full-stack educational platform</strong> built for <strong>FormulaXR</strong> that hosts 40+ interactive science simulations powered by Unity. Students explore subjects like Biology, Chemistry, and Physics through hands-on 3D experiences — from food chain ecosystems to interactive periodic tables.
    </div>
    <div class="paragraph">
        I developed the <strong>entire backend and frontend</strong> using ASP.NET Core and Blazor WebAssembly, as well as the <strong>core Unity package</strong> used to produce all simulations. A custom communication layer bridges Unity WebGL builds and the portal, tracking student progress, evaluating actions, and reporting results in real time.
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full-stack development of the web portal (ASP.NET Core + Blazor WebAssembly)</li>
            <li>Architected the core Unity simulation package used across all 40+ simulations</li>
            <li>Built the communication bridge between Unity WebGL and the portal for real-time progress tracking and evaluation</li>
            <li>Student action tracking, grading, and reporting system</li>
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
    `, "#1565C0"),

    new ProjectData("ortovr", "OrtoVR — Surgical Training", "img/projects/ortovr.png",
    `
    <div class="paragraph">
        <strong>OrtoVR</strong> is a VR training application developed for <strong>Ortos&iacute;ntese</strong>, a Brazilian orthopedic company. The software instructs surgeons on the proper use of prosthetic tools and was featured as a key demonstration at a major healthcare fair in 2018.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/yU6mq5-gpb8?start=302" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Architected the full project structure</li>
            <li>Designed and implemented a VR task system for guided surgical procedures</li>
            <li>Refined a custom VR interaction system for precise instrument handling</li>
            <li>Integrated network code for collaborative training sessions</li>
        </ul>
    </div>
    `, "#E91E63"),

    new ProjectData("vr-surgery", "VR Surgery — Hospital BP", "img/projects/vr-surgery.png",
    `
    <div class="paragraph">
        A <strong>proof-of-concept</strong> developed for <strong>Hospital Benefic&ecirc;ncia Portuguesa de S&atilde;o Paulo (BP)</strong> — one of Brazil's most prestigious healthcare institutions, recognized among the world's best hospitals for seven consecutive years. The project simulates surgical procedures using a robotic arm controlled through a VR headset, exploring the intersection of hardware integration and immersive simulation.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/xIl3_2Z3_X0" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Integrated hardware drivers for robotic arm control</li>
            <li>Developed the VR interface and UI for surgical interaction</li>
            <li>Refactored and stabilized the existing codebase</li>
        </ul>
    </div>
    `, "#F44336"),

    new ProjectData("vr-classroom", "Virtual Classroom", "img/projects/vr-classroom.png",
    `
    <div class="paragraph">
        A <strong>multi-user virtual classroom</strong> developed in collaboration with the City Hall of S&atilde;o Jos&eacute; dos Campos, Brazil. This project laid the foundation for several core systems I continue to use across all my VR projects today.
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
            <li>Built an extensible VR interaction system (teleportation, object manipulation) reused across subsequent projects</li>
            <li>Developed a modular VR networking layer designed for easy extension</li>
            <li>Performance optimization for smooth multi-user experiences</li>
        </ul>
    </div>
    `, "#3F51B5"),

    new ProjectData("forklift-vr", "Forklift Safety Training", "img/projects/forklift-vr.png", `
    <div class="paragraph">
        A <strong>VR forklift training simulator</strong> developed for <strong>Nestl&eacute;</strong>. The application walks operators through critical safety checkpoints — pre-operation inspection, environment awareness, load handling — and evaluates whether each step is performed correctly in real time.
    </div>
    <div class="paragraph">
        Custom-built in <strong>Unity for Meta Quest</strong>.
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
            <li>Full development of the VR training simulator</li>
            <li>Real-time evaluation system for safety checkpoints</li>
            <li>Forklift physics and controls tuned for VR</li>
            <li>Performance optimization for Meta Quest</li>
        </ul>
    </div>
    `, "#FF9800"),

    new ProjectData("painter-sim", "Industrial Painter Simulator", "img/projects/painter-sim.png", `
    <div class="paragraph">
        A <strong>multi-user VR simulation</strong> of an industrial painting machine, developed for a major multinational corporation. The application supports both <strong>VR and desktop modes</strong> within the same shared environment, allowing teams to collaborate regardless of hardware.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/jnUIvtkdHCs" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full development of the simulation codebase</li>
            <li>Multi-user networking with simultaneous VR and desktop participants</li>
            <li>Layer system and animation logic for the painting machine</li>
            <li>Cross-platform experience (VR headset + non-VR desktop)</li>
        </ul>
    </div>
    `, "#546E7A"),

    new ProjectData("dupont-vr", "DuPont — VR Product Tour", "img/projects/dupont-vr.png", `
    <div class="paragraph">
        A <strong>VR city tour experience</strong> developed for <strong>DuPont</strong>'s internal event <strong>"Next Generation DuPont"</strong>, which ran over 3 consecutive days and was experienced by <strong>800+ attendees</strong>. Built using the Oculus DK2, the application guides users through an interactive virtual city, highlighting DuPont products integrated into everyday environments — showcasing the company's presence in daily life.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/KZkpDJGheIk" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full development of the VR experience</li>
            <li>Interactive city environment with product discovery points</li>
            <li>Built for Oculus DK2 — one of the earliest commercial VR development kits</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/dupont-event-1.jpg" alt="DuPont Next Generation event" />
        <img class="pc-screenshot" src="img/projects/dupont-event-2.jpg" alt="Attendees experiencing the VR tour" />
        <img class="pc-screenshot" src="img/projects/dupont-event-3.jpg" alt="Event booth" />
    </div>
    `, "#EF6C00"),

    new ProjectData("climatempo-vr", "Climatempo — VR Experience", "img/projects/climatempo-vr.png", `
    <div class="paragraph">
        A <strong>VR experience</strong> developed for <strong><a href="https://www.climatempo.com.br/" target="_blank">Climatempo</a></strong> and <strong>Kersys</strong> for the <strong>RM Vale 2016</strong> event. The application takes users through interactive scenes showcasing weather and environmental data in an immersive format.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/-JgiY85GKkc" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Full development of the VR application</li>
            <li>Scene navigation and transition system</li>
        </ul>
    </div>
    `, "#1976D2"),
];
