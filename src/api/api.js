import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd9881d8d11d61bffba0c06d8dae5cb01';

export async function getTrandingMovie() {
  const { data } = await axios(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export async function getSearchMovie(query) {
  const { data } = await axios(`${BASE_URL}//search/movie?api_key=${API_KEY}&query=${query}`);
  return data.results;
};

export async function getFullMovieInfo(id) {
  const { data } = await axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export async function getMovieCast(id) {
  const { data } = await axios(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export async function getMovieReviews(id) {
  const { data } = await axios(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};