<template>
  <section class="hero">
    <div class="hero__inner">
      <hero-slider class="hero__slider"></hero-slider>
      <div class="hero__bio bio">
        <div class="bio__content">
          <h1 class="bio__title">Кикель Владимир</h1>
          <p class="bio__subtitle">Живописец</p>
          <img
            style="margin-left: -4px; margin-top: 20px"
            width="80"
            height="80"
            src="@images/logo.svg"
            alt="Kikel Vladimir Logo" />
        </div>
      </div>
      <a
        class="hero__go-down"
        href="#foldline">
      </a>
      <span
        class="visually-hidden"
        id="foldline"></span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import HeroSlider from './HeroSlider.vue';
</script>

<style lang="scss" scoped>
@use '@styles/meta/mixins';
.hero {
  --color-hero: var(--color-bg);

  width: 100%;
  min-height: 475px;
  height: 800px;
  max-height: 100vh;

  &__inner {
    position: relative;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: var(--color-hero);

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 50px 30px var(--color-bg);
    }
  }

  &__bio {
  }

  &__slider {
  }

  &__go-down {
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    inset-block-end: 0;
    left: 50%;
    translate: -50% 0;
    margin-top: 100px;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    background-image: linear-gradient(to bottom, transparent, #000);
    text-shadow: 3px 3px 4px #000;

    &::before {
      content: '↓';
    }

    @media (min-height: 888px) {
      display: none;
    }
  }
}

.bio {
  position: absolute;
  inset: 0;
  transition: transform 600ms ease-in-out;
  transform: translateX(0);
  text-shadow: 0.1em 0.1em 0.2em #000;
  overflow: hidden;
  pointer-events: none;

  &__content {
    font-size: 48px;
    margin: 1.5em 3em;
    padding: 0.7em 1em;
    width: fit-content;
    position: relative;
    z-index: 1;
    pointer-events: all;
    // background-image: linear-gradient(
    //   to right,
    //   rgb(0 0 0 / 0.2) 90%,
    //   transparent
    // );
    background-color: rgb(0 0 0 / 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px) grayscale(20%) brightness(80%);
    border-radius: 12px;
    animation: appearance 400ms ease-in-out forwards;

    @include mixins.lessThan(1920) {
      font-size: 36px;
    }

    @include mixins.lessThan(768) {
      font-size: 28px;
      // margin: 3em 4em;
    }

    @include mixins.lessThan(475) {
      margin: 1em;
      // font-size: 24px;
    }

    @include mixins.lessThan(415) {
      margin: 5%;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
    }
  }

  &__title {
    font-size: 1em;
  }

  &__subtitle {
    font-size: 0.77em;
  }

  &--hidden {
    transform: translateX(-100%);
  }
}

@keyframes appearance {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
