<template>
  <ul class="gallery">
    <li
      v-for="(picture, idx) in pictures"
      class="gallery__item">
      <gallery-picture :picture="picture"></gallery-picture>
    </li>
  </ul>
</template>

<script setup>
// import Masonry from 'masonry-layout';
import GalleryPicture from './GalleryPicture.vue';
// import '/node_modules/masonry-layout/masonry.js';
const props = defineProps({
  pictures: {
    type: Array,
    required: true,
  },
});
// const sas = new Masonry();
</script>

<style lang="scss" scoped>
@use '@styles/meta/mixins';

.gallery {
  --gal-column: minmax(354px, 1fr);
  --gal-min: 354px;
  --gal-gap-col: 2vw;
  --gal-gap-col-row: calc(4.5vh + 0.3vw);

  display: grid;
  grid-template-columns: repeat(auto-fill, var(--gal-column));
  gap: var(--gal-gap-col-row) var(--gal-gap-col);
  padding: var(--gal-gap-col);

  @include mixins.lessThan(768) {
    --gal-column: 354px;

    justify-content: center;
  }

  &__item {
    text-align: center;
  }
}
</style>
