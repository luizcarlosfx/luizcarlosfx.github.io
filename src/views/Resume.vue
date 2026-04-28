<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto;">
    <h1>Resume</h1>

    <div class="paragraph">
      Senior Unity Engineer with 10+ years on interactive 3D systems. Unity day-to-day, with Unreal and C++ where they fit. Strongest in gameplay, real-time multiplayer, and editor tooling.
      <br />
      <br />Founder and CTO of FormulaXR. Production VR/AR titles live on the <strong>Meta Quest Store, App Store, and Google Play</strong>, in active use for years. One Unity codebase serving Quest, iOS, Android, PC, and the web.
      <br />
      <br />Most of the projects are simulation-heavy. The actual work is in the interaction layer: hand-tracked grabs that blend into procedural animation, physics-driven cables and tools, mission and scoring systems, plus the netcode that ties multiplayer sessions together. <a href="https://xrtracker.net" target="_blank">XRTracker</a>, a Unity SDK for markerless object tracking, came out of that.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="mailto:luizcarlos.sfx@gmail.com"><i class="fas fa-envelope fa-lg fa-fw"></i> Request Full Resume</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/avatar.png" alt="Photo of Luiz Carlos" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Experience</h2>

      <h3>Founder &amp; CTO — FormulaXR</h3>
      <h4>2015 – Present</h4>

      <div>
        <ul>
          <li>Architected XRProj, a real-time 3D platform shipping from one codebase to Quest, iOS, Android, PC, and the web. On the Meta Quest Store, App Store, and Google Play; in production since 2019 by Embraer, Nestl&eacute;, Ball Corporation, and Aegea</li>
          <li>The web target is a hand-built <strong>PlayCanvas/TypeScript</strong> port of the Unity client. Component-by-component, with a custom serialization layer that mirrors the Unity runtime. Written before LLMs existed, and the mirroring was the slow part</li>
          <li>Networking compatibility layer over Fish-Net, using <strong>Roslyn source generators and Mono.Cecil IL post-processing</strong> to weave RPCs at compile time. Migrated a production multiplayer codebase off Photon while keeping SyncVar/RPC/ownership semantics intact</li>
          <li>Gameplay systems and scoring evaluators across VR training titles (medical, surgical, industrial), including <strong>Virtua</strong> for Becton Dickinson on the Meta Quest Store, in use since 2021 across Brazil, Mexico, Colombia, Argentina, and Chile</li>
          <li>Built and shipped XRTracker, a commercial Unity SDK for markerless 6DOF tracking. <strong>Native C++ CV core</strong>, GPU-accelerated rendering, in-editor tracking-model pipeline (FBX, OBJ, glTF)</li>
          <li>Shared Unity SDK powering 40+ interactive science mini-games on the FormulaXR education portal, with a Blazor WebAssembly + .NET Core frontend and a WebGL communication bridge that reports trainee progress and scoring back in real time</li>
          <li>Performance optimization for Quest and high-end mobile (stereo rendering, 72&ndash;90 Hz, draw-call discipline, GPU instancing, custom shaders)</li>
          <li>Asset Bundles for runtime content loading</li>
          <li>Led cross-functional teams across full project lifecycles, from client discovery and technical scoping through architecture, development, and delivery</li>
        </ul>
      </div>

      <div class="tech-stack">Unity, C#, C++, Unreal Engine, PlayCanvas (TypeScript), FishNet, Photon PUN, Roslyn, Mono.Cecil, ASP.NET Core, Quest, iOS, Android, PC, WebGL</div>

      <h2>Technical Skills</h2>

      <div class="skills-list">
        <div class="skill-category">
          <h3>Gameplay Programming</h3>
          <div>Player interaction systems (VR + desktop), character &amp; vehicle controllers, physics-driven mechanics, scoring &amp; objective systems</div>
        </div>
        <div class="skill-category">
          <h3>Real-Time Multiplayer</h3>
          <div>FishNet, Photon PUN, custom RPC weaving (Roslyn + Mono.Cecil), state replication, ownership semantics, asymmetric multiplayer (VR + desktop)</div>
        </div>
        <div class="skill-category">
          <h3>Engine &amp; Tools</h3>
          <div>Editor windows, custom inspectors, source generators, IL post-processing, Asset Bundles for live content, custom shaders</div>
        </div>
        <div class="skill-category">
          <h3>Performance</h3>
          <div>Stereo VR (Quest, 72&ndash;90 Hz), high-end mobile profiling (Frame Debugger, RenderDoc, OVR Metrics), draw-call &amp; GPU optimization</div>
        </div>
        <div class="skill-category">
          <h3>Engines</h3>
          <div>Unity (primary), Unreal Engine (C++/Blueprint), PlayCanvas</div>
        </div>
        <div class="skill-category">
          <h3>Programming</h3>
          <div>C#, C++, TypeScript, JavaScript, Java</div>
        </div>
        <div class="skill-category">
          <h3>Computer Vision</h3>
          <div>Markerless 6DOF tracking (silhouette, edge, depth), GPU-accelerated CV pipelines, native C++ runtime</div>
        </div>
        <div class="skill-category">
          <h3>Platforms</h3>
          <div>Meta Quest, iOS, Android, PC, WebGL, HoloLens</div>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <div>ASP.NET Core, real-time client-server communication, LMS integration</div>
        </div>
      </div>

      <h2>Game Development</h2>

      <div>
        <ul>
          <li>C++ gameplay in Unreal Engine 5: built the full VR interaction layer (grab, throw, hand presence, physics-driven ball handling) for VR Basketball on standalone Meta Quest 2, no Blueprints</li>
          <li>Real-time multiplayer rewrite for <strong>Truco Animado</strong>, an established mobile card game on Google Play (networking layer, matchmaking, lobby)</li>
          <li>Multiple Unity titles across genres: 2D multiplayer platformer (Mercenary Rush), Donkey Kong 2 remake, Rick Dangerous remake with a junior team I mentored, endless runner (Fox Trot), educational adventure (Sanja Runner)</li>
          <li>Custom Unity tools on the Asset Store (Pivot Editor)</li>
          <li>Currently working on an independent title for 2026</li>
        </ul>
      </div>

      <h2>Key Projects</h2>

      <div>
        <ul>
          <li><strong>XRProj</strong> (<a href="https://xrproj.com" target="_blank">xrproj.com</a>): Multi-platform real-time 3D system shipping to Quest (Meta Quest Store), mobile (App Store, Google Play), PC, and web (custom PlayCanvas/TypeScript port). In production use since 2019.</li>
          <li><strong>Virtua</strong>: Interactive VR medical simulation shipped to Becton Dickinson on the Meta Quest Store. In use across 5 countries since 2021. Custom Roslyn + Mono.Cecil networking compatibility layer.</li>
          <li><strong>XRTracker</strong> (<a href="https://xrtracker.net" target="_blank">xrtracker.net</a>): Commercial Unity SDK for markerless 6DOF tracking. Native C++ CV core, 4&ndash;8 ms/frame on mobile.</li>
          <li><strong>VR Basketball</strong>: Unreal Engine 5 / C++ VR title targeting standalone Meta Quest 2.</li>
        </ul>
      </div>

      <h2>Education</h2>

      <h3>B.Sc. Computer Science — IBTA</h3>
      <h4>2011 – 2015</h4>
      <div>Instituto Brasileiro de Tecnologia Avan&ccedil;ada</div>

      <h2>Languages</h2>

      <h3>Portuguese</h3>
      <div>Native</div>

      <h3>English</h3>
      <div>Professional</div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  object-fit: cover;
}

.tech-stack {
  font-style: italic;
}

.skills-list {
  max-width: 800px;
}

.skill-category {
  margin-bottom: 16px;
}

.skill-category h3 {
  padding-bottom: 4px;
  font-size: 1.1em;
  color: #b0b0b0;
  font-weight: 400;
}

.skill-category div {
  padding-left: 0;
  color: #ffffff;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 0px;
    padding-left: 80px;
    padding-top: 10px;
  }

}
</style>
