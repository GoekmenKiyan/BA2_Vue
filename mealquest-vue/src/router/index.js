import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import RecipeList from '../pages/RecipeList.vue';
import RecipeDetail from '../pages/RecipeDetail.vue';
import Favorites from '../pages/Favorites.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/recipes', name: 'recipes', component: RecipeList },
  { path: '/recipe/:id', name: 'recipeDetail', component: RecipeDetail },
  { path: '/favorites', name: 'favorites', component: Favorites },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});