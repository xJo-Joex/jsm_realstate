import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '36f97a212amshc83f48a4f39da2ap198039jsn35be60a4b626'
      }
  });
    
  return data;
}