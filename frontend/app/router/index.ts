import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Index from '~/pages/index.vue';
import Authentication from '~/pages/Authentication.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: Authentication,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
