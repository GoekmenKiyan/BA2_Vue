import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query, diet = '', sort = '', offset = 0) => {
  const { data } = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
      diet,
      sort,
      offset,
      number: 12,
      addRecipeInformation: true,
    },
  });
  return data.results;
};

export async function getRandomRecipes(count = 4) {
  const res = await axios.get(`${BASE_URL}/random`, {
    params: {
      apiKey: API_KEY,
      number: count,
    },
  });
  return res.data.recipes;
}

export const getRecipeDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}/information`, {
    params: { apiKey: API_KEY },
  });
  return data;
};