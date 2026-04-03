<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      XR Engineer with 10+ years of experience architecting real-time 3D systems in Unity for industrial, medical, and training applications.
      <br />Founder and CTO of FormulaXR, delivering production XR platforms to companies including Embraer, Nestl&eacute;, and Becton Dickinson — from CAD visualization and assembly validation tools to VR surgical training simulations.
      <br />
      <br />Creator of <a href="https://xrtracker.net" target="_blank">XRTracker</a>, a markerless 6DOF object tracking system for Unity built on custom computer vision.
      <br />
      <br />Specialized in cross-platform XR architecture (Quest, mobile, PC, WebGL), real-time networking, and performance optimization for constrained devices.

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
          <li>Architected XRProj, a multi-platform XR content creation system (VR, AR, mobile, PC, WebGL) adopted by Embraer, Nestl&eacute;, Ball Corporation, and Aegea</li>
          <li>Delivered VR surgical training simulations for Becton Dickinson, Ortos&iacute;ntese, and Hospital Benefic&ecirc;ncia Portuguesa, enabling scalable training with LMS integration and step-by-step evaluation systems</li>
          <li>Built and shipped XRTracker, a commercial Unity plugin for markerless 6DOF object tracking using custom computer vision</li>
          <li>Built a full-stack educational platform (ASP.NET Core + Blazor WebAssembly) hosting 40+ interactive Unity WebGL science simulations with real-time student progress tracking</li>
          <li>Migrated a production multiplayer medical VR platform from Photon PUN to FishNet, improving scalability and reducing hosting costs</li>
          <li>Led cross-functional teams across full project lifecycles, from client discovery and technical scoping through architecture, development, and delivery</li>
        </ul>
      </div>

      <div class="tech-stack">Unity, C#, Photon PUN, FishNet, ASP.NET Core, WebGL, Quest, HoloLens, Android, iOS</div>

      <h2>Technical Skills</h2>

      <div class="skills-list">
        <div class="skill-category">
          <h3>XR Development</h3>
          <div>VR / AR / MR (Unity — primary, Unreal Engine)</div>
        </div>
        <div class="skill-category">
          <h3>Programming</h3>
          <div>C#, C++, JavaScript, TypeScript, Java</div>
        </div>
        <div class="skill-category">
          <h3>Networking</h3>
          <div>Photon PUN, FishNet, Netcode for GameObjects, real-time multiplayer architectures</div>
        </div>
        <div class="skill-category">
          <h3>Real-Time Systems</h3>
          <div>Interaction systems, simulation, object tracking, computer vision</div>
        </div>
        <div class="skill-category">
          <h3>Performance</h3>
          <div>Optimization for mobile VR (Quest, Android, iOS)</div>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <div>ASP.NET Core</div>
        </div>
        <div class="skill-category">
          <h3>Platforms</h3>
          <div>Quest, PC, Mobile, WebGL</div>
        </div>
      </div>

      <h2>Game Development</h2>

      <div>
        <ul>
          <li>Implemented real-time multiplayer networking for a mobile game with 1M+ downloads and a 4.6 rating</li>
          <li>Developed a VR basketball experience using Unreal Engine for Meta Quest</li>
          <li>Developed gameplay systems using Unreal Engine's Gameplay Ability System (GAS)</li>
          <li>Currently developing an independent title for release in 2026</li>
        </ul>
      </div>

      <h2>Key Projects</h2>

      <div>
        <ul>
          <li><strong>XRProj</strong> — <a href="https://xrproj.com" target="_blank">xrproj.com</a>: Production multi-platform XR system for CAD visualization, collaboration, and content creation</li>
          <li><strong>Medical VR Training (Virtua / OrtoVR)</strong>: VR training platform for medical procedures and surgical simulations with LMS integration and evaluation systems</li>
          <li><strong>XRTracker</strong> — <a href="https://xrtracker.net" target="_blank">xrtracker.net</a>: Commercial Unity plugin for markerless 6DOF object tracking using custom computer vision</li>
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
      <div>Conversational</div>

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

.skill-category h3 {
  padding-bottom: 0px;
}

.skill-category div {
  padding-left: 10px;
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
