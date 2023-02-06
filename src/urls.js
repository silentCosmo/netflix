import { API_KEY } from "./constants/constants";

export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const sci_fi = `/discover/movie?api_key=${API_KEY}&with_genres=878`
export const crime = `/discover/movie?api_key=${API_KEY}&with_genres=80` 
export const thriller = `/discover/movie?api_key=${API_KEY}&with_genres=53` 

export const trending_movies = `/trending/movie/day?api_key=${API_KEY}`
export const upcoming_movies = `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const rated_movies = `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const popular_movies = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const latest_tv = `/trending/tv/day?api_key=${API_KEY}`
export const popular_tv = `/tv/popular?api_key=${API_KEY}&with_networks=213`
export const rated_tv = `/tv/top_rated?api_key=${API_KEY}&with_networks=213`
export const today_tv = `/tv/on_the_air?api_key=${API_KEY}&language=ml&page=1`
export const sci_tv = `/discover/tv?api_key=${API_KEY}&with_genres=10765`