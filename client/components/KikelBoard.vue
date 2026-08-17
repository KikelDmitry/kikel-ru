<template>
  <section class="board">
    <div class="board__grid">
      <div class="board__about">
        <img
          class="board__avatar"
          src="@images/avatar0.jpg"
          alt="Кикель Владимир Фото" />
        <p class="board__paragraph">
          <strong class="board__name">Кикель Владимир Борисович</strong> родился
          в Ростове-на-Дону в 1964 году.
        </p>
        <p class="board__paragraph">
          Закончил живописно-педагогическое отделение РХУ им. М.Б. Грекова. С
          2005 года член ТСХ России.
        </p>
        <p class="board__paragraph">
          Занимаюсь в основном станковой живописью, отчасти монументальной.
          Стараюсь писать то, что нравится и на заказ.
        </p>
        <p class="board__paragraph">
          Технические предпочтения: масло, акварель, темпера, холст, бумага.
          Отдельная любовь – левкас – шлифованная гипсовая поверхность на
          жестком основании (дерево, OSB и пр.) которая позволяет прописывать
          мелкие детали.
        </p>
      </div>
      <div class="board__categories">
        <kikel-categories></kikel-categories>
      </div>
      <div class="board__contacts">
        <kikel-contacts></kikel-contacts>
      </div>
    </div>
  </section>
</template>

<script setup>
import KikelCategories from './KikelCategories.vue';
import KikelContacts from './KikelContacts.vue';
</script>

<style lang="scss" scoped>
@use '@styles/meta/mixins';
.board {
  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 3vmax 3vmin;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding-block: 40px;
    padding-inline: 1em;

    @include mixins.moreThan(1930) {
      padding-inline: 0;
    }
  }

  &__about,
  &__categories,
  &__contacts {
    flex: 1 1 310px;
  }

  &__about {
    font-size: 18px;
  }

  &__categories {
    @include mixins.lessThan(1024) {
      // height: 0;
      // min-height: 100%;
      // overflow: auto;
    }
  }

  &__name {
    font-size: 120%;
  }

  &__avatar {
    width: 220px;
    max-width: 50%;
    float: inline-start;
    margin-inline-end: 0.6em;
    margin-block-end: 0.3em;
  }

  &__paragraph {
    &:not(:last-child) {
      margin-block-end: 1em;
    }
  }

  &__contacts {
    @include mixins.lessThan(1024) {
      grid-column: 1/3;
    }
  }

  &__block {
    // background-color: #9a9a9a;
  }
}
</style>
