<template>
  <div class="contacts">
    <h2 class="contacts__title">Контакты</h2>
    <ul class="contacts__list">
      <li
        v-for="(val, key) in contacts"
        :key="key"
        class="contacts__item">
        <a
          :href="val.link"
          target="_blank"
          class="contacts__link"
          >{{ val.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { contacts } from '@/stores/contact.js';
</script>

<style lang="scss" scoped>
@use '@styles/meta/mixins';

.contacts {
  height: 100%;

  @include mixins.moreThan(768) {
    text-align: end;
  }

  &__title {
    font-size: 24px;
  }

  &__list {
  }

  &__item {
  }

  &__link {
  }
}
</style>
