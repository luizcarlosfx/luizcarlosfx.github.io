<template>
  <div>
    <h1>Games &amp; Tools</h1>

    <div style="margin-bottom: 30px;">
      Game development projects and Unity tools — from a mobile card game with 1M+ downloads to published Asset Store extensions.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
