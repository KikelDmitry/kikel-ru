<template>
  <div class="gallery-page">
    <gallery-menu class="gallery-page__menu"></gallery-menu>
    <gallery-list
      class="gallery-page__list"
      :pictures="pictures"></gallery-list>
  </div>
  <gallery-viewer></gallery-viewer>
</template>

<script setup>
import GalleryMenu from '@/components/gallery/GalleryMenu.vue';
import GalleryList from '@/components/gallery/GalleryList.vue';
import GalleryViewer from '@/components/gallery/GalleryViewer.vue';
import { useGallery } from '@/stores/gallery';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
// import { useRoute } from 'vue-router';

const store = useGallery();
// const route = useRoute();
// console.log(route.params);

const { pictures, isLoaded, isError } = storeToRefs(store);

onMounted(() => {
  store.getPictures();
});
</script>

<style lang="scss" scoped>
// temp block
.gallery-page {
  margin: 0 auto;
  max-width: 1920px;
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
