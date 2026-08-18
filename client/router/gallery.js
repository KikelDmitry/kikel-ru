import GalleryView from '@/views/GalleryView.vue';
import { genres } from '../../config/category.js';
import { htmlMeta } from '@/stores/meta.js';

const categories = () => {
  const routes = [];
  for (const key in genres) {
    const meta = htmlMeta.pictures[key] || null;
    routes.push({
      path: key,
      name: genres[key],
      component: GalleryView,
      meta,
    });
  }
  return routes;
};

export const galleryRoutes = {
  path: '/gallery',
  name: 'Живопись',
  component: GalleryView,
  meta: {
    title: 'Галерея',
    description: 'Description of gallery',
  },
  children: categories(),
};

console.log(galleryRoutes);


export const galleryPath = galleryRoutes.path;
