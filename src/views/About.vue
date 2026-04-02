<template>
  <div style="margin-bottom: 80px;">
    <h1>Luiz Carlos da Silva Junior</h1>

    <div class="paragraph">
      <div>
        <strong>XR Engineer</strong> with 10+ years of experience architecting real-time 3D systems in Unity for industrial, medical, and training applications.<br/>
        Founder and CTO of <strong>FormulaXR</strong>, delivering production XR platforms to companies including Embraer, Nestl&eacute;, and Becton Dickinson.
      </div>

      <div style="margin-top: 20px;">Explore my <router-link class="highlight-link" to="/game-projects">INDUSTRY &amp; SIMULATION</router-link>, <router-link class="highlight-link" to="/other-projects">GAMES &amp; TOOLS</router-link>, or check out my <router-link class="highlight-link" to="/resume">RESUME</router-link> for the full picture.</div>

      <div style="margin-top: 40px;">Specialized in cross-platform XR architecture (Quest, mobile, PC, WebGL), real-time networking, and performance optimization for constrained devices. <strong>Available for remote work.</strong> Reach me at <a class="highlight-link" href="mailto:luizcarlos.sfx@gmail.com">luizcarlos.sfx@gmail.com</a> or <router-link class="highlight-link" to="/contact">CONTACT</router-link>.</div>
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
