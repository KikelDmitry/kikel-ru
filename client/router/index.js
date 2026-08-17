import { createRouter, createWebHistory } from 'vue-router';
import KikelHome from '@/components/KikelHome.vue';
import { galleryRoutes } from './gallery';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: KikelHome,
      meta: {
        title: 'Художник Владимир Кикель',
        description: 'Description of Vladimir Kikel homepage',
        noHeader: true,
      },
    },
    {
      path: '/about',
      name: 'Об авторе',
      component: () => import('@/views/ContentView.vue'),
      meta: {
        title: 'Об авторе',
        description: 'Description of Vladimir Kikel about',
      },
    },
    galleryRoutes,
  ],
});

export default router;
