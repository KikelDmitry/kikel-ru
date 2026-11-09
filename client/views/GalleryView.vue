<template>
  <div
    class="gallery-page"
    :class="{ 'is-loading': !isLoaded }">
    <gallery-list
      class="gallery-page__list"
      :pictures="pictures"></gallery-list>
  </div>
  <!-- <gallery-viewer></gallery-viewer> -->
</template>

<script setup>
import GalleryList from '@/components/gallery/GalleryList.vue';
// import GalleryViewer from '@/components/gallery/GalleryViewer.vue';
import { useGallery } from '@/stores/gallery';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
// import router from '@/router';

const store = useGallery();
const route = useRoute();
// console.log(route);

const { pictures, isLoaded, isError } = storeToRefs(store);
// console.log(route.meta.alias);

// store.getPictures(route.meta.alias);

watch(
  () => route.meta.alias,
  (category) => {
    isLoaded.value = false;
    if (!category) {
      return;
    }

    store.getPictures(category);
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
// temp block
.gallery-page {
  min-height: 100%;
  width: 100%;
  max-width: 1920px;
  display: grid;
  
  &::before {
    content: '';
    position: fixed;
    z-index: 2;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url('@images/logo_animated.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 200ms,
      visibility 200ms;
  }

  &.is-loading {
    &::before {
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }
  }

  &__list {
    width: 100%;
  }
}
</style>
