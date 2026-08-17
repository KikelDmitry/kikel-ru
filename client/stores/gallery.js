import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from './api';

export const useGallery = defineStore('gallery', () => {
  const pictures = ref([]);
  const isLoaded = ref(false);
  const isError = ref(false);
  const getPictures = async () => {
    await fetch(api)
      .then((res) => res.json())
      .then((json) => (pictures.value = json.sheet))
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
