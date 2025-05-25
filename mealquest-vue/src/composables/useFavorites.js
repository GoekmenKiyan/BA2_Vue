import { ref } from 'vue';

const FAVORITES_KEY = 'favorites';

const stored = localStorage.getItem(FAVORITES_KEY);
const favorites = ref(stored ? JSON.parse(stored) : []);

const saveToStorage = () => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites.value));
};

export function useFavorites() {
  const addFavorite = (recipe) => {
    if (!favorites.value.find(r => r.id === recipe.id)) {
      favorites.value.push(recipe);
      saveToStorage();
    }
  };

  const removeFavorite = (id) => {
    favorites.value = favorites.value.filter(r => r.id !== id);
    saveToStorage();
  };

  const isInFavorites = (id) => {
    return favorites.value.some(r => r.id === id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isInFavorites,
  };
}