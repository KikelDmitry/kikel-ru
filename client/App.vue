<template>
  <div class="app">
    <kikel-header
      class="app__header"
      v-if="!route.meta.noHeader"></kikel-header>
    <main class="app__main">
      <router-view></router-view>
    </main>
    <kikel-footer class="app__footer"></kikel-footer>
    <!-- <app-preloader class="app__preloader"></app-preloader> -->
  </div>
</template>

<script setup>
import KikelHeader from '@/components/layout/KikelHeader.vue';
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
  display: flex;
  flex-direction: column;

  &__main {
    flex-grow: 1;
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
