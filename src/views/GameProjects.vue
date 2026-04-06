<template>
  <div>
    <h1>Industry &amp; Simulation</h1>

    <div style="margin-bottom: 30px;">
      Production systems I've architected and developed for industrial, medical, educational, and training applications — delivering immersive solutions to companies like Embraer, Nestl&eacute;, and Becton Dickinson.
    </div>

    <ProjectsList v-bind:projects="mainProjects" />

    <h2 style="margin-top: 60px; margin-bottom: 20px; opacity: 0.7;">Showcase &amp; Events</h2>
    <ProjectsList v-bind:projects="minorProjects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import { mainProjects, minorProjects } from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      mainProjects,
      minorProjects,
    };
  },
});
</script>
