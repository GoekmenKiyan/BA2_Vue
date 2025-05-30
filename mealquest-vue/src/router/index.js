import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/recipes',
    component: () => import('../pages/RecipeList.vue')
  },
  {
    path: '/recipe/:id',
    name: 'recipeDetail',
    component: () => import('../pages/RecipeDetail.vue')
  },
  {
    path: '/favorites',
    component: () => import('../pages/Favorites.vue')
  },
  {
    path: '/search',
    component: () => import('../pages/RecipeList.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
