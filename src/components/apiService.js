import axios from "axios";

// Fetch movie details from OMDb API
export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
  return response.data;
};
