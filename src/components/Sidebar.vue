<script lang="ts" setup>
withDefaults(defineProps<{ active: boolean }>(), { active: false });

const links = [
  { title: "Home", icon: "fas fa-home", to: { name: "home" } },
  { title: "Profile", icon: "fas fa-user", to: { name: "profile" } },
  { title: "Message", icon: "fas fa-comments", to: { name: "messages" } },
  { title: "Setting", icon: "fas fa-sliders-h", to: { name: "setting" } },
  { title: "Help", icon: "fas fa-question", to: { name: "help" } },
  { title: "Password", icon: "fas fa-key", to: { name: "password" } },
  { title: "Sign Out", icon: "fas fa-sign-out-alt", to: { name: "signOut" } },
];
</script>

<template>
  <aside :class="['c-sidebar', { 'is-active': active }]">
    <ul class="sidebar-content">
      <template v-for="(link, index) of links" :key="index">
        <li class="sidebar-item">
          <router-link class="sidebar-item-link" :to="link.to">
            <span class="cool-border one" />
            <span class="cool-border two" />

            <i :class="['icon', link.icon]" />
            <span class="title">{{ link.title }}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </aside>
</template>

<style lang="scss">
.c-sidebar {
  position: relative;
  width: 76px;
  min-height: 100%;
  overflow: hidden auto;
  box-sizing: initial;
  border-left: 5px solid #4d5bf9;
  border-radius: 10px;
  background-color: #4d5bf9;

  transition: width 0.5s;

  .sidebar-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 34px;

    .sidebar-item {
      position: relative;
      list-style: none;
      width: 100%;

      .sidebar-item-link {
        position: relative;
        display: flex;
        width: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        color: #fff;
        text-decoration: none;

        .icon {
          position: relative;
          display: block;
          min-width: 60px;
          height: 60px;
          line-height: 60px;

          font-size: 1.25rem;
          text-align: center;
        }

        .title {
          position: relative;
          display: block;
          padding-left: 10px;
          height: 60px;
          line-height: 60px;
          white-space: normal;
        }

        .cool-border {
          position: absolute;
          display: none;
          width: 100%;
          height: 20px;
          background-color: #fff;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #4d5bf9;
          }

          &.one {
            top: -20px;

            &::before {
              border-bottom-right-radius: 20px;
            }
          }

          &.two {
            bottom: -20px;

            &::before {
              border-top-right-radius: 20px;
            }
          }
        }

        &.router-link-exact-active {
          color: #333;
          background-color: #fff;

          .cool-border {
            display: block;
          }
        }
      }
    }
  }

  &.is-active {
    width: 280px;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
