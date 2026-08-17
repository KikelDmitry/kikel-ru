<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        v-for="item in router.options.routes"
        :key="item.path"
        class="menu__item">
        <template v-if="item.children">
          <span class="menu__link">{{ item.name }}</span>
          <ul class="menu__sub-list">
            <li
              v-for="subItem in item.children"
              class="menu__sub-item">
              <router-link :to="`${item.path}/${subItem.path}`">
                {{ subItem.name }}</router-link
              >
            </li>
          </ul>
        </template>
        <router-link
          v-else
          :to="item.path"
          class="menu__link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import router from '@/router';
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.menu {
  &__list,
  &__sub-list {
    position: absolute;
    display: flex;
    // overflow: hidden;
  }
  &__list {
  }
  &__sub-list {
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 300ms,
      visibility 300ms;
  }
  &__item {
    &:hover {
      .menu__sub-list {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }
  }
}
</style>
