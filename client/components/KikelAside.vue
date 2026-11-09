<template>
  <aside class="menu">
    <main-menu class="menu__nav"></main-menu>
  </aside>
</template>

<script setup>
import MainMenu from '@/components/MainMenu.vue';
</script>
<style lang="scss" scoped>
.menu {
	&__nav {
		position: sticky;
		top: 0;
	}
}
</style>
