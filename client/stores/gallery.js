import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGallery = defineStore('gallery', () => {
  const pictures = ref([]);
  const isLoaded = ref(false);
  const isError = ref(false);

  const getPictures = async (category) => {
    await fetch(`http://localhost:4300/pictures/${category}`)
      .then((res) => res.json())
      .then((json) => (pictures.value = json.pictures))
      .catch(() => (isError.value = true))
      .finally(() => (isLoaded.value = true));
  };
  return {
    pictures,
    isLoaded,
    isError,
    getPictures,
  };
});
