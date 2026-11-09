<template>
  <nav class="main-menu">
    <ul class="main-menu__list">
      <li
        v-for="item in routes"
        :key="item.path"
        class="main-menu__item">
        <template v-if="item.children">
          <span class="main-menu__link">{{ item.name }}</span>
          <ul class="main-menu__sub-list">
            <li
              v-for="subItem in item.children"
              class="main-menu__sub-item">
              <router-link
                :to="`${item.path}/${subItem.path}`"
                class="main-menu__link"
                activeClass="main-menu__link--active">
                {{ subItem.name }}
              </router-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <router-link
            :to="item.path"
            class="main-menu__link"
            activeClass="main-menu__link--active">
            {{ item.name }}
          </router-link>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import router from '@/router';

const routes = router.options.routes;
console.log(routes);

</script>

<style lang="scss" scoped>
.menu {
}
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
    // opacity: 0;
    // visibility: hidden;
    // pointer-events: none;
    // transition:
    //   opacity 300ms,
    //   visibility 300ms;
  }
  &__item {
    // &:hover {
    //   .main-menu__sub-list {
    //     opacity: 1;
    //     visibility: visible;
    //     pointer-events: all;
    //   }
    // }
  }
  &__link {
    &--active {
      color: red;
    }
  }
}
</style>
