<template>
  <nav class="categories">
    <ul class="categories__list">
      <li
        v-for="category in categories"
        class="categories__item">
        <router-link
          class="categories__link"
          :to="`${galleryPath}/${category.alias || null}`"
          >{{ category.title }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { galleryPath } from '@/router/gallery';
import { ref, onMounted } from 'vue';

const categories = ref([]);
onMounted(() => {
  fetch('http://localhost:4300/categories')
    .then((res) => res.json())
    .then((json) => {
      categories.value = json;
    });
});
</script>

<style lang="scss" scoped>
.categories {
  &__list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
  }

  &__item {
    aspect-ratio: 4/3;
    text-align: center;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1em;
    border: 1px solid;
  }
}
</style>
