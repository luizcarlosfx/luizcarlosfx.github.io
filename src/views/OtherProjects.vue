<template>
  <div>
    <h1>Games &amp; Tools</h1>

    <div style="margin-bottom: 30px;">
      Game development projects and Unity tools — from a mobile card game with 1M+ downloads to published Asset Store extensions.
    </div>
    <ProjectsList v-bind:projects="mainProjects" />

    <h2 style="margin-top: 60px; margin-bottom: 20px; opacity: 0.7;">Hobby &amp; Small Projects</h2>
    <ProjectsList v-bind:projects="hobbyProjects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import { mainProjects, hobbyProjects } from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      mainProjects,
      hobbyProjects,
    };
  },
});
</script>
