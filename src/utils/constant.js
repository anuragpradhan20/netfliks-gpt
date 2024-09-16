export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDYzMWQxNjk1MDIzMGU3ODYxNDRjZTUzNjc0ZGQzZiIsIm5iZiI6MTcyNTg2NDEzOC4xMTU1NTgsInN1YiI6IjY2ZGU5NTRhYzJiMDQ1OGU5MDM0NmVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSaXonnHjQsPoODAqFveTKwHCpDQOiyf1TSMNAcjNLw",
  },
};
export const MOVIE_IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "spa", name: "Spanish" },
];
