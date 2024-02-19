import axios from "axios";

const API_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDJmNWJjMDIwMTMyN2Y4MmJiZjBkZTViMmM1ZjNjMCIsInN1YiI6IjY1ZDFlNGJiMTY4NWRhMDFiMWM0ZWFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IVsSCUhSdI7Yh3UE11i4L_MCBLR7IAcZ79K-53iWTLk";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.method = 'GET';
axios.defaults.language = 'en-US';
axios.defaults.headers.accept = 'application/json';
axios.defaults.headers.Authorization = API_TOKEN;

export const getBestDayFilms = async () => {
  const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
  return response.data;
};


export const getFilmsByQuery = async (query) => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data;
};


export const getFilmsByID = async (id) => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const getCreditsByID = async (id) => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data;
};

export const getReviewsByID = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data;
};

export const generateImgPath = imgName => {
  return `https://image.tmdb.org/t/p/w500${imgName}`;
};
