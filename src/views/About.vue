<template>
  <div style="margin-bottom: 80px; max-width: 1200px; margin-left: auto; margin-right: auto;">
    <h1>Luiz Carlos da Silva Junior</h1>

    <div class="paragraph">
      <div>
        <strong>Senior Unity Engineer and systems architect</strong> with 10+ years on interactive 3D systems. Unity day-to-day, with Unreal and C++ where they fit. Gameplay, real-time multiplayer, and editor tooling, with cross-platform delivery across Quest, iOS, Android, PC, and the web.<br/><br/>
        I founded <strong>FormulaXR</strong> in 2015 and have led it ever since. In a small company that means going well beyond the technical work: lead developer and architect, but also team lead, regularly on calls and visits with clients, and one of the people shaping company strategy.<br/><br/>
        Over those years the work has spanned a pretty broad range: games, medical VR training, industrial simulation, educational mini-games, and a markerless object tracking SDK. I tend to be involved end to end, from initial concept through the publishing process. Several of those products are live on the <strong>Meta Quest Store, App Store, and Google Play</strong>, with several years of active production use.
      </div>

      <div style="margin-top: 20px;"><strong>Architecture</strong> has always been the part of software development I love the most. It's a puzzle, basically the code UX. What I always look at is how much a new feature has to know about the rest of the system to work. When that stays small, extending the thing is easy. When it grows, every new feature drags the whole system along with it. If I catch myself doing the same thing twice, that's an architecture problem. When a new feature costs more than it should, something's wrong underneath, not with the feature.</div>

      <div style="margin-top: 20px;">Picking the right tech matters just as much to me. Every project starts with R&amp;D, figuring out what actually fits the project and the team before I commit to anything, instead of just reaching for whatever I used last time.</div>

      <div style="margin-top: 20px;">Even the best models available, run at max effort, will just make the code work. They won't stop and ask whether the structure should change, they'll hack around it until the output looks right. That's the real difference between a good model and a great one, the great one is just better at hacking. Deciding when the design actually needs to change is still on me. That's why I work <strong>spec-driven</strong> with agents: I own the architecture and the review, the agent does the typing.</div>

      <div style="margin-top: 20px;"><strong>XRProj</strong> is the clearest proof of all this. Engineers import their own models, CAD or not, then build animations and step-by-step sequences for quality checklists, training, or design review, and publish it to Android, iOS, WebGL and desktop, with AR or VR on top where it fits. None of it takes code. Getting there meant building engine-level pieces inside Unity, serialization, a component model, animation, rendering, multiplatform, networking, so it ended up being kind of an engine on top of Unity. Same instinct is why the web client runs on PlayCanvas instead of Unity WebGL. The <strong>Three.js Editor</strong> is that same instinct now, just with an agent doing more of the actual building.</div>

      <div style="margin-top: 20px;">Explore my <router-link class="highlight-link" to="/projects">PROJECTS</router-link>, or check out my <router-link class="highlight-link" to="/resume">RESUME</router-link> for the full picture.</div>

      <div style="margin-top: 40px;">Available for <strong>remote work</strong>. Reach me at <a class="highlight-link" href="mailto:luizcarlos.sfx@gmail.com">luizcarlos.sfx@gmail.com</a> or <router-link class="highlight-link" to="/contact">CONTACT</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Photo of Luiz Carlos" />
      <div class="location">S&atilde;o Paulo, <strong>Brazil</strong></div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.highlight-link {
  color: #64B5F6;
  opacity: 0.85;
  font-weight: bold;
}
.highlight-link:hover {
  opacity: 1;
}

.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.photo img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
}

.location {
  margin-top: 12px;
  font-size: 1.1em;
  opacity: 0.75;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
