import GalleryView from '@/views/GalleryView.vue';
import { genres, technique } from '../../config/category.js';
import { htmlMeta } from '@/stores/meta.js';

const categories = () => {
  const routes = [];
  for (const key in genres) {
    const meta = {
      ...htmlMeta.pictures[key],
      alias: key,
    }
    // const meta = htmlMeta.pictures[key] || null;
    
    routes.push({
      path: key,
      name: genres[key],
      component: GalleryView,
      meta,
    });
  }
  // injecting techinque
  // for (const key in technique) {
  //   const meta = htmlMeta.pictures[key] || null;
  //   routes.push({
  //     path: key,
  //     name: technique[key],
  //     component: GalleryView,
  //     meta,
  //   });
  // }
  // console.log(routes);
  
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

export const galleryPath = galleryRoutes.path;
