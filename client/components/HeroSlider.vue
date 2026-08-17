<template>
  <div
    class="slider"
    v-if="activeSlide">
    <!-- <pre>{{ slides[activeSlide] }}</pre> -->
    <div
      class="slider__img"
      aria-role="image"
      :style="`background-image: url('${activeSlide.url}')`"
      :class="{
        animated: imageLoaded,
        ltr: activeSlide.dir === 'ltr',
        rtl: activeSlide.dir === 'rtl',
      }">
      <span class="visually-hidden">{{
        `Работа ${activeSlide.meta.title} из категории ${activeSlide.meta.category}`
      }}</span>
    </div>
    <div class="slider__meta">
      <div class="slider__title">
        {{ activeSlide.meta.title }}
      </div>
      <a
        href="#"
        class="slider__tech">
        {{ activeSlide.meta.tech }}
      </a>
    </div>
    <router-link
      :to="`${galleryPath}/${activeSlide.meta.category}`"
      class="slider__btn"
      >Смотреть в галерее</router-link
    >
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { galleryPath } from '@/router/gallery';

const slides = ref([]);
const slidesCount = ref(0);
const activeIndex = ref(0);
const activeSlide = computed(() => slides.value[activeIndex.value]);
const imageLoaded = ref(false);

const checkImageLoading = () => {
  imageLoaded.value = true;
};

const initSlider = () => {
  window.addEventListener('load', checkImageLoading);
  let interval = setInterval(() => {
    activeIndex.value >= slidesCount.value - 1
      ? (activeIndex.value = 0)
      : activeIndex.value++;
  }, 14000);
};

const destroySlider = () => {
  window.removeEventListener('load', checkImageLoading);
};

onMounted(() => {
  fetch('http://localhost:4300/hero/slides')
    .then((res) => res.json())
    .then((json) => {
      slides.value = json.slides;
      slidesCount.value = json.count;
    });
  initSlider();
});

onUnmounted(() => {
  destroySlider();
});
</script>

<style lang="scss" scoped>
.slider {
  height: 100%;
  box-shadow: inset 0 0 30px 20px var(--color-bg);

  &__img {
    background-size: cover;
    background-position: var(--position);
    position: absolute;
    inset: 0;
    animation: up-down-left-right 14s 0s ease-in-out forwards paused;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: red;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-image: url('@images/logo_animated.svg');
    }

    &.ltr {
      --position: left top;
    }

    &.rtl {
      --position: right bottom;
    }

    &.animated {
      animation-play-state: running;

      &.ltr {
        animation-name: up-down-left-right;
      }
      &.rtl {
        animation-name: down-up-right-left;
      }
      &::before {
        content: none;
      }
    }

    &:active {
      animation-play-state: paused;
    }
  }

  &__meta {
    position: absolute;
    z-index: 1;
    display: flex;
    gap: 0.3em;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 0.7em 1em 1em 0.7em;
    inset-block-end: 0;
    inset-inline-end: 0;
    text-align: end;
    text-shadow: -1px -1px 1px #000;
    border-start-start-radius: 10px;
    box-shadow: 0 0 20px rgb(0 0 0 / 0.3);
    color: #ddd;
    background-color: rgb(0 0 0 / 0.3);
    background-image: linear-gradient(
      315deg,
      rgb(255 255 255 / 0.1),
      rgb(0 0 0 / 0.1)
    );
    backdrop-filter: blur(3px);
  }

  &__btn {
    --border-color: rgb(128 128 128 / 0.4);
    position: absolute;
    z-index: 1;
    bottom: 100px;
    left: 50%;
    translate: -50% 0;
    background-color: rgb(0 0 0 / 0.6);
    color: #ddd;
    backdrop-filter: blur(2px);
    padding: 0.3em 0.6em;
    border-radius: 0.3em;
    // border: 4px double var(--border-color);
    font-size: 28px;
    text-align: center;
    text-shadow: 1px 1px 1px #000;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
    white-space: nowrap;
    transition: background-color 200ms;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border: 4px ridge var(--border-color);
      border-radius: inherit;
    }

    &::before {
      inset: -4px;
    }

    &::after {
      inset: -8px;
    }

    &:hover {
      background-color: rgb(0 0 0 / 0.9);
    }
  }

  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.15;
  }

  &__tech {
    font-size: 9px;
    line-height: 1.15;
    text-transform: uppercase;
  }
}

@keyframes up-down-left-right {
  0% {
    opacity: 0;
  }
  3% {
    opacity: 1;
    background-position: 0 0;
  }
  97% {
    opacity: 1;
    background-position: 100% 100%;
  }
  100% {
    opacity: 0;
    background-position: 100% 100%;
  }
}

@keyframes down-up-right-left {
  0% {
    opacity: 0;
  }
  3% {
    opacity: 1;
    background-position: 100% 100%;
  }
  97% {
    opacity: 1;
    background-position: 0 0;
  }
  100% {
    opacity: 0;
    background-position: 0 0;
  }
}
</style>
