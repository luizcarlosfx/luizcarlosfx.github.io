import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("truco-animado", "Truco Animado", "img/projects/truco-animado.png",
    `
    <div class="paragraph">
        <strong>Truco Animado</strong> is a multiplayer mobile card game based on Truco, one of Brazil's most popular card games. With <strong>over 1 million downloads</strong> on Google Play and a <strong>4.6/5 star rating</strong> across 23,000+ reviews, it's one of the top Truco games on the platform.
    </div>
    <div class="paragraph">
        Brought in to implement multiplayer, I discovered the existing codebase couldn't support the feature reliably. I <strong>rebuilt the entire game logic from scratch</strong>, restructuring it for maintainability, extensibility, and real-time networking.
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Rewrote core gameplay systems for clean architecture and extensibility</li>
            <li>Developed the matchmaking and lobby system</li>
            <li>Implemented real-time multiplayer networking</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Available on <a href="https://play.google.com/store/apps/details?id=br.com.delotech.trucoindie" target="_blank">Google Play</a>
        </div>
    </div>
    `, "#4CAF50", true),

    new ProjectData("vr-racing", "VR Racing Game", "img/projects/vr-racing.png",
    `
    <div class="paragraph">
        A <strong>VR racing experience</strong> developed for a Brazilian motorized wheelchair company. The game was showcased at <strong>Rock in Rio 2017</strong>, one of the world's largest music festivals, providing an accessible and immersive racing experience to attendees.
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Customized Unity's vehicle physics system for wheelchair-based controls</li>
            <li>Implemented multiplayer racing for competitive on-site play</li>
            <li>Designed levels and tuned the driving experience</li>
        </ul>
    </div>
    `, "#FF9800"),

    new ProjectData("vr-basketball", "VR Basketball", "img/projects/vr-basketball.png",
    `
    <div class="paragraph">
        <strong>VR Basketball</strong> is an immersive VR experience built in <strong>Unreal Engine 5 with C++</strong> for <strong>Meta Quest 2</strong>. Gameplay systems and VR interactions are implemented entirely in C++ for maximum performance on standalone hardware.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/rLnq_LxKHoE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key highlights:
        <ul>
            <li>Built with Unreal Engine 5 targeting Meta Quest 2</li>
            <li>Gameplay and interaction systems implemented in C++</li>
            <li>Physics-based ball handling and throwing mechanics</li>
            <li>Optimized for standalone headset performance</li>
        </ul>
    </div>
    `, "#FF5722"),

    new ProjectData("fox-trot", "Fox Trot", "img/projects/fox-trot.png",
    `
    <div class="paragraph">
        <strong>Fox Trot</strong> is a Web3 endless runner where players can purchase NFTs to customize their character. Built for WebGL with a focus on performance and extensibility.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/s0U8bGTIkNo" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Key contributions:
        <ul>
            <li>Optimized the project for smooth WebGL performance</li>
            <li>Developed the core endless runner system</li>
            <li>Created extensible obstacle, collectible, and daily reward systems</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://luizcarlosfx.itch.io/foxtrot" target="_blank">itch.io</a>
        </div>
    </div>
    `, "#FF5722"),

    new ProjectData("mercenary-rush", "Mercenary Rush", "img/projects/mercenary-rush.png",
    `
    <div class="paragraph">
        <strong>Mercenary Rush</strong> is a 2D multiplayer platformer developed as a capstone project during my Computer Science degree. The project was a deep dive into real-time networking, Unity's Mecanim animation system, and custom editor tooling.
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
    `, "#795548"),

    new ProjectData("dk-clone", "Donkey Kong 2 — Clone", "img/projects/dk-clone.png",
    `
    <div class="paragraph">
        A love letter to my childhood favorite — a faithful recreation of <strong>Donkey Kong</strong> built in Unity. With no dedicated artist on the team, I collected sprites from community resources and built custom editor tools to streamline the asset pipeline.
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
    `, "#FFC107"),

    new ProjectData("rick-dangerous", "Rick Dangerous — Remake", "img/projects/rick-dangerous.png",
    `
    <div class="paragraph">
        A remake of the classic arcade game <strong>Rick Dangerous</strong>, developed as a mentorship-driven project where I guided a team of junior artists and developers through the full game development process.
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
    `, "#607D8B"),

    new ProjectData("pivot-editor", "Pivot Editor", "img/projects/pivot-editor.png",
    `
    <div class="paragraph">
        <strong>Pivot Editor</strong> is a Unity Editor extension published on the Unity Asset Store that allows developers to visually edit mesh pivot points directly in the editor using intuitive handle-based controls.
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
    `, "#9E9E9E"),
];