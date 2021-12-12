<script lang="ts" setup>
import { reactive } from "@vue/reactivity";

import CHeader from "@/components/Header.vue";
import CSidebar from "@/components/Sidebar.vue";

const sidebar = reactive({ active: false });

function handleSidebarToggle() {
  sidebar.active = !sidebar.active;
}
</script>

<template>
  <c-header :sidebar="sidebar.active" @click:toggle="handleSidebarToggle" />
  <c-sidebar :active="sidebar.active" />
  <router-view />
</template>

<style lang="scss">
#app {
  position: relative;
  display: grid;
  grid-template-areas:
    "c-header c-header"
    "c-sidebar app-page";
  grid-template-rows: min-content 1fr;
  grid-template-columns: min-content 1fr;
  gap: 0.5rem 1rem;
  min-height: 100vh;
  padding-bottom: 0.5rem;

  .c-header {
    grid-area: c-header;
  }

  .c-sidebar {
    grid-area: c-sidebar;
    margin-left: 0.5rem;
  }

  .app-page {
    grid-area: app-page;
  }
}
</style>
