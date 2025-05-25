import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query = '', offset = 0) => {
  const { data } = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
      offset,
      number: 20,
      addRecipeInformation: true
    }
  });
  return data.results || [];
};

export const getRecipeDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY
    }
  });
  return data;
};