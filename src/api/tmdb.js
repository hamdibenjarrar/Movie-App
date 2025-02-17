import axios from 'axios';

const API_KEY = 'd1ebdfa351dff65c29bcfddceba0fabe';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query = '', page = 1) => {
  const endpoint = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

  try {
    const response = await axios.get(endpoint);
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch movies:', error.message);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  const movieDetailsEndpoint = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const videoEndpoint = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`;
  
  try {
    const [movieResponse, videoResponse] = await Promise.all([
      axios.get(movieDetailsEndpoint),
      axios.get(videoEndpoint)
    ]);

    const { title, overview, poster_path, backdrop_path } = movieResponse.data;
    const videos = videoResponse.data.results;
    const trailerLink = videos.find(video => video.type === 'Trailer')?.key
      ? `https://www.youtube.com/watch?v=${videos.find(video => video.type === 'Trailer')?.key}`
      : null;

    return {
      id,
      title,
      description: overview,
      poster_path,
      backdrop_path,
      trailerLink,
    };
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    throw error;
  }
};