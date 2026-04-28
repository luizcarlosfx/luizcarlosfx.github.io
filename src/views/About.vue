<template>
  <div style="margin-bottom: 80px; max-width: 1200px; margin-left: auto; margin-right: auto;">
    <h1>Luiz Carlos da Silva Junior</h1>

    <div class="paragraph">
      <div>
        <strong>Senior Unity Engineer</strong> with 10+ years on interactive 3D systems. Mostly Unity, with some Unreal and C++ on the side. Gameplay, real-time multiplayer, and editor tooling, with cross-platform delivery across Quest, iOS, Android, PC, and the web.<br/><br/>
        I founded <strong>FormulaXR</strong> in 2015 and have been its CTO ever since. In a small company, that role spans well beyond the technical work: I'm lead developer and architect, but also team lead, regularly on calls and visits with clients, and one of the people shaping company strategy.<br/><br/>
        Over those years the work has spanned a pretty broad range: games, medical VR training, industrial simulation, educational mini-games, and a markerless object tracking SDK. I tend to be involved end to end, from initial concept through the publishing process. Several of those products are live on the <strong>Meta Quest Store, App Store, and Google Play</strong>, with several years of active production use.
      </div>

      <div style="margin-top: 20px;">Explore my <router-link class="highlight-link" to="/projects">PROJECTS</router-link>, or check out my <router-link class="highlight-link" to="/resume">RESUME</router-link> for the full picture.</div>

      <div style="margin-top: 40px;"><strong>Available for remote work.</strong> Reach me at <a class="highlight-link" href="mailto:luizcarlos.sfx@gmail.com">luizcarlos.sfx@gmail.com</a> or <router-link class="highlight-link" to="/contact">CONTACT</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Photo of Luiz Carlos" />
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
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
