<template>
  <footer class="footer">
    <div class="footer__inner">
      Кикель Владимир © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  border-block-start: 1px solid;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em;
  }
}
</style>
