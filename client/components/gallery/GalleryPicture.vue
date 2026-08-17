<template>
  <figure
    class="picture"
    :id="picture.id">
    <a
      @click.prevent
      :href="`#${picture.id}`"
      class="picture__link">
      <picture
        class="picture__pic"
        :class="{
          'is-loaded': isLoaded,
          'is-error': isError,
        }">
        <!-- <source srcset="" type="" /> -->
        <img
          @error="isError = true"
          @load="isLoaded = true"
          :src="`${galleryPath}/${picture.n}.jpg`"
          :alt="picture.title"
          loading="lazy"
          class="picture__img" />
      </picture>
    </a>
    <figcaption class="picture__data">
      <gallery-meta
        :title="picture.title"
        :technique="picture.technique"
        :dimensions="picture.dimensions"
        :year="picture.year"></gallery-meta>
    </figcaption>
  </figure>
</template>

<script setup>
import GalleryMeta from './GalleryMeta.vue';
import { galleryPath } from '@/router/gallery';
import { ref } from 'vue';
const isLoaded = ref(false);
const isError = ref(false);

const props = defineProps({
  picture: {
    type: Object,
    required: true,
  },
});
const { title, technique } = props;
</script>

<style lang="scss" scoped>
.picture {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  margin: 0;

  &__pic {
    aspect-ratio: 1/1;
    display: flex;
    transform: scale(0.7);
    transition:
      transform 500ms,
      opacity 500ms;

    &::before {
      content: '';
      z-index: 1;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: rgb(var(--color-secondary) / 0.5);
    }

    &::after {
      content: '';
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 80px;
      height: 80px;
      background-image: url('@images/logo_animated.svg');
    }

    img {
      max-height: 100%;
      margin: auto auto 0;
    }

    &.is-loaded,
    &.is-error {
      transform: scale(1);

      &::before,
      &::after {
        content: none;
      }
    }

    &.is-error {
      img {
        display: none;
      }

      &::after {
        content: '';
        background-image: url('@images/logo.svg');
      }
    }
  }

  &__data {
    margin-block-start: auto;
  }
}
</style>
