<template>
  <div class="pic-meta">
    <h2 class="pic-meta__title">{{ title }}</h2>
    <table class="pic-meta__table">
      <tbody>
        <tr class="pic-meta__row">
          <th class="pic-meta__cell pic-meta__cell--key">Техника</th>
          <td class="pic-meta__cell pic-meta__cell--val">{{ technique }}</td>
        </tr>
        <tr class="pic-meta__row">
          <th class="pic-meta__cell pic-meta__cell--key">Размер</th>
          <td class="pic-meta__cell pic-meta__cell--val">
            {{ dimensions }} см.
          </td>
        </tr>
        <tr class="pic-meta__row">
          <th class="pic-meta__cell pic-meta__cell--key">Год</th>
          <td class="pic-meta__cell pic-meta__cell--val">{{ year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'technique', 'dimensions', 'year']);
</script>

<style lang="scss" scoped>
.pic-meta {
  width: 100%;
  padding: 0 20px 6px;

  &__title {
    padding-block: 0.4em;
    line-height: 1.4;
    font-size: 26px;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__row {
    border-block-start: 1px solid rgb(255 255 255 / 0.3);
  }

  &__cell {
    padding: 0.2em 0.4em;
    font-size: 14px;

    &--key {
      width: 15%;
      text-align: end;
      font-weight: normal;
      white-space: nowrap;
    }

    &--val {
      text-align: start;
      font-weight: 700;
      border-inline-start: 1px solid rgb(255 255 255 / 0.3);
    }
  }
}
</style>
