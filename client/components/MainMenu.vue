<template>
  <aside class="menu">
    <nav class="main-menu">
      <ul class="main-menu__list">
        <li
          v-for="item in mainMenu"
          :key="item.path"
          class="main-menu__item">
          <template v-if="item.children">
            <span class="main-menu__link">{{ item.name }}</span>
            <ul class="main-menu__sub-list">
              <li
                v-for="subItem in item.children"
                class="main-menu__sub-item">
                <router-link :to="`${item.path}/${subItem.path}`">
                  {{ subItem.name }}
                </router-link>
              </li>
            </ul>
          </template>
          <router-link
            v-else
            :to="item.path"
            class="main-menu__link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>

  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import router from '@/router';
import { ref } from 'vue';

const routes = router.options.routes;

const mainMenu = ref(routes);
</script>

<style lang="scss" scoped>
.menu {}
.main-menu {
  &__list,
  &__sub-list {
    // position: absolute;
    // display: flex;
    // overflow: hidden;
  }
  &__list {
  }
  &__sub-list {
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 300ms,
      visibility 300ms;
  }
  &__item {
    &:hover {
      .main-menu__sub-list {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }
  }
}
</style>
