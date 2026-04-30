<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto;">
    <h1>Resume</h1>

    <div class="paragraph">
      Senior Unity engineer, 10+ years shipping games and simulations. Unity day-to-day, with Unreal and C++ where they fit. Strongest in gameplay, real-time multiplayer, and editor tooling.
      <br />
      <br />Founder and CTO of FormulaXR since 2015. Built the studio from zero, leading engineering teams of up to 11 across multiple concurrent products. Production titles live on the <strong>Meta Quest Store, App Store, and Google Play</strong>, used across five countries by Embraer, Nestl&eacute;, Becton Dickinson, Ball Corporation, and Aegea. One Unity codebase serving Quest, iOS, Android, PC, and the web.
      <br />
      <br />Most of the work is in the interaction layer: hand-tracked grabs that blend into procedural animation, physics-driven cables and tools, mission and scoring systems, plus the netcode that ties multiplayer sessions together. <a href="https://xrtracker.net" target="_blank">XRTracker</a>, a Unity SDK for markerless object tracking, came out of that.

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
          <li>Founded and led the company as CTO. Studio scaled to up to 11 people at peak across engineering, design, and operations, running multiple concurrent products and client programs. Own technical direction, engineering hiring, and client-facing scoping and delivery</li>
          <li>Architected XRProj, a real-time 3D platform shipping from one codebase to Quest, iOS, Android, PC, and the web. On the Meta Quest Store, App Store, and Google Play; in production since 2019 across enterprise clients including Embraer, Nestl&eacute;, Ball Corporation, Aegea, and Becton Dickinson</li>
          <li>The web target is a hand-built <strong>PlayCanvas/TypeScript</strong> port of the Unity client. Component-by-component, with a custom serialization layer that mirrors the Unity runtime. Written before LLMs existed, and the mirroring was the slow part</li>
          <li>Networking compatibility layer over Fish-Net using <strong>Roslyn source generators and Mono.Cecil IL post-processing</strong> to weave RPC call sites at compile time. Migrated a production multiplayer codebase off Photon in under 2 months, with local LAN mode supporting 20+ concurrent players for offline industry events alongside cloud-relayed remote sessions</li>
          <li>Gameplay systems and scoring evaluators across VR training titles (medical, surgical, industrial), including <strong>Virtua</strong> for Becton Dickinson on the Meta Quest Store, in use since 2021 across Brazil, Mexico, Colombia, Argentina, and Chile</li>
          <li>Built and shipped XRTracker, a commercial Unity SDK for markerless 6DOF tracking. <strong>Native C++ CV core</strong>, GPU-accelerated rendering, in-editor tracking-model pipeline (FBX, OBJ, glTF)</li>
          <li>Shared Unity SDK powering 40+ interactive science mini-games on the FormulaXR education portal, with a Blazor WebAssembly + .NET Core frontend and a WebGL communication bridge that reports trainee progress and scoring back in real time</li>
          <li>Performance optimization for Quest and high-end mobile. Held target frame rates (72&ndash;90 Hz) across production titles via stereo rendering, GPU instancing, draw-call discipline, and custom shaders</li>
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
        <div class="skill-category">
          <h3>Animation Systems</h3>
          <div>State machines, IK, procedural animation blending, hand-tracked rigs</div>
        </div>
        <div class="skill-category">
          <h3>Unreal Frameworks</h3>
          <div>Unreal Gameplay Ability System (GAS), Behavior Trees</div>
        </div>
      </div>

      <h2>Key Projects</h2>

      <div>
        <ul>
          <li><strong>XRProj</strong> (<a href="https://xrproj.com" target="_blank">xrproj.com</a>): Multi-platform real-time 3D system shipping to Quest (Meta Quest Store), mobile (App Store, Google Play), PC, and web (custom PlayCanvas/TypeScript port). In production use since 2019.</li>
          <li><strong>Virtua</strong>: Interactive VR medical simulation shipped to Becton Dickinson on the Meta Quest Store. In use across 5 countries since 2021. Custom Roslyn + Mono.Cecil networking compatibility layer.</li>
          <li><strong>XRTracker</strong> (<a href="https://xrtracker.net" target="_blank">xrtracker.net</a>): Commercial Unity SDK for markerless 6DOF tracking. Native C++ CV core, 4&ndash;8 ms/frame on mobile.</li>
          <li><strong>FormulaXR Education Platform</strong> (<a href="https://formulaxr.com" target="_blank">formulaxr.com</a>): Full-stack training platform with a Unity-based authoring SDK and Blazor WebAssembly + .NET Core frontend. 40+ interactive browser-based science mini-games.</li>
        </ul>
      </div>

      <h2>Key Games</h2>

      <div>
        <ul>
          <li>C++ gameplay in <strong>Unreal Engine 5</strong> for <strong>VR Basketball</strong> on standalone Meta Quest 2. Built the full VR interaction layer (grab, throw, hand presence, physics-driven ball handling)</li>
          <li><strong>Purge All Heroes</strong>: Turn-based grid combat in Unreal Engine, built on the <strong>Gameplay Ability System (GAS)</strong> in Angelscript. Adapted GAS for turn ticks (it's time-based by default), built the enemy AI on Behavior Trees with complex ability triggering, and exposed event hooks across the combat flow so the designer could wire custom logic in Blueprint without touching code. Mentored the designer on GAS</li>
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
