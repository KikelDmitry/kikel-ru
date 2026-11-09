<template>
  <div class="app">
    <kikel-aside class="app__aside"></kikel-aside>
    <main class="app__main">
      <router-view></router-view>
    </main>
    <kikel-footer class="app__footer"></kikel-footer>
    <!-- <app-preloader class="app__preloader"></app-preloader> -->
  </div>
</template>

<script setup>
import KikelAside from '@/components/KikelAside.vue';
import KikelFooter from '@/components/layout/KikelFooter.vue';
// import AppPreloader from '@/components/AppPreloader.vue';

import { RouterView, useRoute } from 'vue-router';
const route = useRoute();
</script>

<style lang="scss">
@use '@styles/main';

.app {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr auto;

  &__aside {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &__main {
    grid-column: 2/3;
    grid-row: 1/2;
    display: grid;
  }

  &__footer {
    grid-column: 1/3;
    grid-row: 2/3;
    margin-top: auto;
  }
}
</style>
