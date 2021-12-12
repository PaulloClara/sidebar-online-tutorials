<script lang="ts" setup>
withDefaults(defineProps<{ sidebar: boolean }>(), { sidebar: false });
</script>

<template>
  <header class="c-header">
    <a href="https://www.youtube.com/watch?v=P_A2kNpyQBs" target="_blank" rel="noopener noreferrer">
      <h2>Online Tutorials</h2>
    </a>

    <button
      :class="['toggle', { 'is-active fas fa-times': sidebar, 'fas fa-bars': !sidebar }]"
      @click="$emit('click:toggle')"
    />
  </header>
</template>

<style lang="scss">
.c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #4d5bf9;

  a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }

  .toggle {
    width: 38px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 12px;
    cursor: pointer;
    background-color: #4d5bf9;

    color: #fff;
    font-size: 1.25rem;

    transition: all 0.2s;

    &.is-active {
      color: #d44;
    }
  }
}
</style>
