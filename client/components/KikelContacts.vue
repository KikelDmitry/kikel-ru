<template>
  <div class="contacts">
    <h2 class="contacts__title">Контакты</h2>
    <ul class="contacts__list">
      <li
        v-for="contact in contacts"
        :key="contact.alias"
        class="contacts__item">
        <a
          :href="contact.link"
          target="_blank"
          class="contacts__link"
          >{{ contact.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const contacts = [
  {
    title: 'E-mail',
    alias: 'email',
    link: 'mailto:kikelvladimir@gmail.com',
  },
  {
    title: 'Telegram',
    alias: 'telegram',
    link: 'https://t.me/Vladimirkikel',
  },
];
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
