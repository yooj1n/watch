const API_KEY = "0a5c0d8acd8423f2bb24153b5937e1c7";

const BASE_URL = "https://api.themoviedb.org/3";

export const nowPlaying = () =>
  fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

  export const upcoming = () =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json()); 

  export const popular = () =>
  fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json()); 

  export const topRated = () =>
  fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json()); 
