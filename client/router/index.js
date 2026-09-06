import { createRouter, createWebHistory } from 'vue-router';
import KikelHome from '@/components/KikelHome.vue';
import { galleryRoutes } from './gallery.js';
import { htmlMeta } from '@/stores/meta.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: KikelHome,
      meta: htmlMeta.home,
    },
    {
      path: '/about',
      name: 'Об авторе',
      component: () => import('@/views/ContentView.vue'),
      meta: htmlMeta.about,
    },
    galleryRoutes,
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ],
});

// HOOKS
// make dynamic meta tags
router.beforeEach((to) => {
  const { title, description } = to.meta;
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  document.head.append(metaDescription); 
  document.title = title;
});

export default router;
