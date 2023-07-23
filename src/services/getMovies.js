import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzJhOTk5NDM1NWNhY2NmNGE3N2JmZjAyNmNjNjY0OCIsInN1YiI6IjY0NDExOTQ1Y2VlMmY2MDRjOTM1NThlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6iWYxkAFeLjERmAvNKYAFfOx1703iMnRJfzbvJKB1ss";

export async function getTrendingMovies() {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?language=ru`);
  return response.data.results;
}

export async function getMoviesDetails(moviesId) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}`);
  return response.data;
}

export async function getMoviesByName(moviesId) {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${moviesId}`);
  return response.data.results;
}

//https://api.themoviedb.org/3/movie/movie_id/credits
export async function getMoviesCast(moviesId) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/credits`);
  return response.data.cast;
}
//Reviews

export async function getMoviesReviews(moviesId) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/reviews`);
  return response.data.results;
}
