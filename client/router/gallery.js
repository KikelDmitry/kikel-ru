import GalleryView from '@/views/GalleryView.vue';
import { genres } from '../../config/category.js';
import { htmlMeta } from '@/stores/meta.js';

const categories = () => {
  const routes = [];
  for (const key in genres) {
    const meta = htmlMeta.pictures[key];
    routes.push({
      path: key,
      name: genres[key],
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
  // children: [
  //   {
  //     path: 'seascape',
  //     name: 'Морской пейзаж',
  //     meta: {
  //       title: 'Морской пейзаж',
  //       description: 'Морской пейзаж descr',
  //     },
  //   },
  //   {
  //     path: 'stilllife',
  //     name: 'Натюрморт',
  //     meta: {
  //       title: 'Натюрморт',
  //       description: 'Натюрморт descr',
  //     },
  //   },
  //   {
  //     path: 'portrait',
  //     name: 'Портрет',
  //     meta: {
  //       title: 'Портрет',
  //       description: 'Портрет descr',
  //     },
  //   },
  //   {
  //     path: 'paysage',
  //     name: 'Пейзаж',
  //     meta: {
  //       title: 'Пейзаж',
  //       description: 'Портрет descr',
  //     },
  //   },
  //   {
  //     path: 'italy',
  //     name: 'Итальянский пейзаж',
  //     meta: {
  //       title: 'Итальянский пейзаж',
  //       description: 'Итальянский пейзаж descr',
  //     },
  //   },
  //   {
  //     path: 'subject',
  //     name: 'Сюжет',
  //     meta: {
  //       title: 'Сюжет',
  //       description: 'Сюжет descr',
  //     },
  //   },
  // ],
  
};

console.log(galleryRoutes);


export const galleryPath = galleryRoutes.path;
