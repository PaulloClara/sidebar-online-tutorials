<script lang="ts" setup>
import CSidebar from "@/components/Sidebar.vue";
</script>

<template>
  <c-sidebar />
  <router-view />
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-size: 16px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
