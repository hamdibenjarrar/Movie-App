import axios from 'axios';

const API_KEY = 'd1ebdfa351dff65c29bcfddceba0fabe'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query = '', page = 1) => {
  const endpoint = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

  const response = await axios.get(endpoint);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};