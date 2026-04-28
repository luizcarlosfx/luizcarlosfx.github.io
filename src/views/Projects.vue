<template>
  <div>
    <h1>Projects</h1>

    <div class="intro">
      Selected work from FormulaXR, freelance gigs, and personal projects. Use the tabs to filter.
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

    <template v-if="activeTab === 'all'">
      <div v-for="(group, index) in allViewGroups" :key="group.title">
        <h2 :class="['group-header', { 'group-header-first': index === 0 }]">{{ group.title }}</h2>
        <ProjectsList :projects="resolveProjects(group.projectIds)" />
      </div>
    </template>

    <template v-else>
      <ProjectsList :projects="filteredProjects" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectData from "@/data/ProjectData.ts";
import { allProjects, tabOrders, allViewGroups } from "@/data/ProjectsData.ts";

const tabs = [
  { id: "all", label: "All" },
  { id: "games", label: "Games" },
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
      allViewGroups,
    };
  },
  computed: {
    projectsById(): Record<string, ProjectData> {
      const map: Record<string, ProjectData> = {};
      for (const p of allProjects) map[p.id] = p;
      return map;
    },
    filteredProjects(): ProjectData[] {
      const order = tabOrders[this.activeTab] || [];
      return this.resolveProjects(order);
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

.group-header {
  font-weight: 100;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  margin-top: 35px;
  padding-bottom: 12px;
  color: #b0b0b0;
  border-top: 1px solid #4a4a4a;
  padding-top: 12px;
}

.group-header.group-header-first {
  margin-top: 0;
  border-top: none;
  padding-top: 0;
}
</style>
