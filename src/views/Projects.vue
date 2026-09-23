<template>
  <div>
    <h1>Projects</h1>

    <div class="intro">
      Shipped real-time 3D work across VR, games, and simulation. Use the tabs to filter.
    </div>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <ProjectsList :projects="filteredProjects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectData, { ProjectTag } from "@/data/ProjectData.ts";
import { allProjects, allOrder, tabOverrides } from "@/data/ProjectsData.ts";

const tabs = [
  { id: "all", label: "All" },
  { id: "games", label: "Games" },
  { id: "vr", label: "VR" },
  { id: "serious-games", label: "Serious Games" },
  { id: "event-activations", label: "Event Activations" },
  { id: "tools-sdks", label: "Tools & SDKs" },
];

export default Vue.extend({
  name: "Projects",
  components: { ProjectsList },
  data() {
    return {
      activeTab: "all" as string,
      tabs,
    };
  },
  computed: {
    projectsById(): Record<string, ProjectData> {
      const map: Record<string, ProjectData> = {};
      for (const p of allProjects) map[p.id] = p;
      return map;
    },
    filteredProjects(): ProjectData[] {
      // A tab follows the "all" ranking filtered by tag, unless it declares its own.
      const all = this.resolveProjects(allOrder);
      if (this.activeTab === "all") return all;
      const override = tabOverrides[this.activeTab];
      if (override) return this.resolveProjects(override);
      return all.filter((p) => p.tags.indexOf(this.activeTab as ProjectTag) !== -1);
    },
  },
  methods: {
    resolveProjects(ids: string[]): ProjectData[] {
      return ids
        .map((id) => this.projectsById[id])
        .filter((p): p is ProjectData => !!p);
    },
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 40px;
}

.intro {
  margin-bottom: 24px;
  max-width: 800px;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.tab {
  background: transparent;
  border: 1px solid #555;
  color: #ccc;
  padding: 8px 16px;
  font-size: 0.95em;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s;
}

.tab:hover {
  border-color: #888;
  color: #fff;
}

.tab.active {
  border-color: #64B5F6;
  color: #fff;
  background: rgba(100, 181, 246, 0.12);
}
</style>
