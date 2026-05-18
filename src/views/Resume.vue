<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto;">
    <h1>Resume</h1>

    <div class="paragraph">
      Senior Unity engineer, 10+ years shipping interactive 3D systems. Unity day-to-day, with Unreal and C++ where they fit. Strongest in VR interaction layers, real-time multiplayer, editor tooling, and cross-platform delivery.
      <br />
      <br />Specialty stack: hand-tracked interaction (gesture grabs blended with procedural animation, physics-driven cables and tools), multiplayer netcode (FishNet, Photon, custom <strong>Roslyn source generators + Mono.Cecil IL post-processing</strong>), and one Unity codebase serving Quest, iOS, Android, PC, WebGL, and HoloLens.
      <br />
      <br />Production titles live on the <strong>Meta Quest Store, App Store, and Google Play</strong>, used across five countries by Embraer, Nestl&eacute;, Becton Dickinson, Ball Corporation, and Aegea. Also shipped <a href="https://xrtracker.net" target="_blank">XRTracker</a>, a commercial Unity SDK for markerless 6DOF object tracking &ndash; native C++ computer vision core with GPU-accelerated pipelines.

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

      <h3>FormulaXR</h3>
      <h4>2015 – Present</h4>

      <div class="sub-position">
        <h5 class="sub-role">Senior Unity Engineer &amp; Tech Lead</h5>
        <h6 class="sub-date">2020 – Present</h6>
        <ul>
          <li>Evolved XRProj from a desktop design-review tool into a real-time 3D platform shipping from one codebase to Quest, iOS, Android, PC, WebGL, and HoloLens. Distributed on the Meta Quest Store, App Store, and Google Play.</li>
          <li>Coded a PlayCanvas / TypeScript port of the Unity client for the web target with a custom serialization layer mirroring the Unity runtime. Component-by-component, written before LLMs existed; the mirroring was the slow part.</li>
          <li>Built a networking compatibility layer from Photon to FishNet using <strong>Roslyn source generators and Mono.Cecil IL post-processing</strong> to weave RPC call sites at compile time. Production migration in under 2 months, local LAN supporting 20+ concurrent players.</li>
          <li>Engineered the Virtua interaction layer (gesture grabs, physics-driven cables and tools) plus a graph-based authoring tool letting designers build training scenarios without code, with LMS integration. Held target 72&ndash;90 Hz on Quest via stereo rendering, GPU instancing, draw-call discipline, and custom shaders.</li>
          <li>Shipped a cross-platform C++ computer vision core with GPU-accelerated pipelines for real-time 6DOF tracking.</li>
          <li>Built the FormulaXR Education stack: Unity-based authoring SDK + Blazor WebAssembly / ASP.NET Core, powering browser-based science mini-games.</li>
          <li>Led engineering teams of up to 11 across the full lifecycle.</li>
        </ul>
      </div>

      <div class="sub-position">
        <h5 class="sub-role">Unity Developer &amp; Lead</h5>
        <h6 class="sub-date">2016 – 2020</h6>
        <ul>
          <li>Engineered the multiplayer Virtual Classroom (2016) for S&atilde;o Jos&eacute; dos Campos City Hall: HTC Vive trackers wired to physical movable chairs, custom VR interaction toolkit + VoIP.</li>
          <li>Led OrtoVR (2017&ndash;2018), Unity-based orthopedic VR surgical training, presented at Feira Hospitalar 2018.</li>
          <li>Built the surgical interaction system for Hospital BP (2019): scalpel cuts, scissors, suturing, forceps + spatula, plus robotic arm I/O.</li>
          <li>Delivered the .STEP-to-Unity CAD importer through the 2018 Samsung Creative Startups program, later became XRProj's CAD pipeline.</li>
        </ul>
      </div>

      <div class="sub-position">
        <h5 class="sub-role">Unity Developer</h5>
        <h6 class="sub-date">2015 – 2016</h6>
        <ul>
          <li>Co-founded FormulaXR and built the early production pipeline. R&amp;D-heavy stage, small team.</li>
          <li>Built the Dupont VR experience for the Next Generation Dupont event.</li>
          <li>Built the early driving-simulator R&amp;D prototype for GE (Logitech G27 wheel-and-pedals hardware integration).</li>
        </ul>
      </div>

      <h3>Freelance Game Developer</h3>
      <h4>2019 – 2024</h4>

      <div>
        <ul>
          <li><strong>Truco Animado</strong> (Unity, 2019): Brought in to add real-time multiplayer to an existing single-player title (1M+ Google Play downloads). Built the full networking, matchmaking, and lobby stack, plus the gameplay refactors needed to support online sessions.</li>
          <li><strong>Fox Trot</strong> (Unity, WebGL, 2023): Endless runner. Performance optimization plus core gameplay (obstacles, collectibles, daily rewards). Playable on itch.io.</li>
          <li><strong>Rick Dangerous</strong> (Unity, Corgi Engine, 2023): Platformer gameplay programming. Playable on itch.io.</li>
          <li><strong>VR Basketball</strong> (Unreal 5, Meta Quest 2, 2024): Built the full VR interaction layer (grab, throw, hand presence, physics-driven ball handling) using C++ for core code + Blueprints for authoring 3 game modes.</li>
        </ul>
      </div>

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
          <h3>Architecture &amp; DI</h3>
          <div>Dependency Injection (VContainer, Zenject), modular component patterns</div>
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
          <h3>Reality</h3>
          <div>VR, AR, MR, XR, Spatial Computing</div>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <div>ASP.NET Core, Blazor WebAssembly, real-time client-server communication, LMS integration</div>
        </div>
        <div class="skill-category">
          <h3>Physics &amp; Animation</h3>
          <div>Obi Physics (rope, cable, soft-body simulation), state machines, IK, procedural animation blending, hand-tracked rigs</div>
        </div>
        <div class="skill-category">
          <h3>Unreal Frameworks</h3>
          <div>Unreal Gameplay Ability System (GAS), Behavior Trees</div>
        </div>
      </div>

      <h2>Selected Projects</h2>

      <div>
        <ul>
          <li><strong>XRProj</strong> (<a href="https://xrproj.com" target="_blank">xrproj.com</a>): Multi-platform XR platform for industrial CAD visualization, collaboration, and content creation. Ships to Quest, iOS, Android, PC, and the web from one Unity codebase. Used for aircraft assembly review, packaging inspection, and infrastructure walkthroughs. Cut client training time from 5h to 3h and inspection time from 2h to 1h.</li>
          <li><strong>Virtua</strong>: Interactive VR medical simulation for Becton Dickinson, on the Meta Quest Store and in active use across Brazil, Mexico, Colombia, Argentina, and Chile since 2021. Trains nurses on central venous catheter insertion. Originally a training product, later extended by the client into sales enablement and event activations.</li>
          <li><strong>XRTracker</strong> (<a href="https://xrtracker.net" target="_blank">xrtracker.net</a>): Commercial Unity SDK for markerless 6DOF object tracking. Locks onto real-world objects directly from a 3D mesh using classical computer vision &ndash; no markers, image targets, or training required. 4&ndash;8 ms/frame on mobile, sub-centimeter precision.</li>
          <li><strong>FormulaXR Education Platform</strong> (<a href="https://formulaxr.com" target="_blank">formulaxr.com</a>): Browser-based learning platform powering 40+ interactive science mini-games. Students drag atoms to build molecules, walk virtual ecosystems for food-chain lessons, explore an interactive periodic table, and balance forces in physics puzzles. Each mini-game is a full title with its own mechanics and scoring.</li>
          <li><strong>Virtual Classroom</strong>: Multiplayer VR education for S&atilde;o Jos&eacute; dos Campos City Hall (2016). Sessions of up to 11 users (teacher + 10 students) with HTC Vive trackers wired to physical movable chairs. Built before Unity's XR Interaction Toolkit shipped &ndash; foundation of my multiplayer stack.</li>
        </ul>
      </div>

      <h2>Education</h2>

      <h3>Bachelor's degree, Computer Science</h3>
      <h4>2011 – 2015</h4>
      <div>Instituto Brasileiro de Tecnologia Avan&ccedil;ada (IBTA)</div>

      <h2>Languages</h2>

      <h3>Portuguese</h3>
      <div>Native</div>

      <h3>English</h3>
      <div>Fluent (C1)</div>

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

.sub-position {
  padding-left: 25px;
  margin-top: 10px;
}

.sub-role {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 25px;
}

.sub-date {
  font-weight: 100;
  font-size: 1.05em;
  margin: 0px;
  padding: 0px;
  padding-top: 5px;
  font-style: italic;
  color: #b0b0b0;
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
