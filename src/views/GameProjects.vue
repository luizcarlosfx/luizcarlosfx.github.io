<template>
  <div>
    <h1>Industry &amp; Simulation</h1>

    <div style="margin-bottom: 30px;">
      Production systems I've architected and developed for industrial, medical, educational, and training applications — delivering immersive solutions to companies like Embraer, Nestl&eacute;, and Becton Dickinson.
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
