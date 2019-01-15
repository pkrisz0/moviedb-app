import axios from 'axios';
import { API_KEY } from './key'

const TOP_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+ API_KEY + '&language=en-US&include_adult=false';

function fetchMovies() {
  return dispatch => {
    return axios.get(TOP_MOVIES_URL)
      .then((response) =>{
        dispatch(getMovies(response.data.results))
      })
  };
}

export function fetchMovieSearch(query) {
  return dispatch => {
    return axios.get('http://api.themoviedb.org/3/search/movie?api_key='+ API_KEY + '&query=' + query + '&include_adult=false')
      .then((response) =>{
        dispatch(searchMovies(response.data.results))
      })
  };
}

export function fetchMovieDetails(movieID) {
  console.log('https://api.themoviedb.org/3/movie/' + movieID + '?api_key='+ API_KEY +'&include_adult=false');
  return dispatch => {
    return axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key='+ API_KEY +'&include_adult=false')
      .then((response) =>{
        dispatch(getDetails(response.data))
      })
  };
}

export function fetchTrailer(movieID) {
  return dispatch => {
    return axios.get('https://api.themoviedb.org/3/movie/' + movieID + '/videos?api_key=' + API_KEY +'&include_adult=false')
      .then((response) =>{
        dispatch(getTrailer(response.data.results))
      })
  };
}

export function fetchAdvencedMovie(query) {
  return dispatch => {
    return axios.get(searchUrl(query))
      .then((response) =>{
        dispatch(searchMovies(response.data.results))
      })
  };
}

function searchUrl(searchParams) {
  let base_url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&language=en-US&include_adult=false&include_video=false';
  if (searchParams.rating) { base_url = base_url + '&vote_average.gte=' + searchParams.rating }
  if (searchParams.year) { base_url = base_url + '&primary_release_year=' + searchParams.year }
  if (searchParams.genre) { base_url = base_url + '&with_genres=' + searchParams.genre }
  if (searchParams.keyword) { base_url = base_url + '&with_keywords=' + searchParams.keyword }
  return base_url;
}

export function getMovies(results){
  return {
    type: "GET_TOP_MOVIES",
    movies: results
  }
}

export function searchMovies(searchResults){
  return {
    type: "SEARCH_MOVIES",
    movies: searchResults
  }
}

export function getDetails(results){
  return {
    type: "GET_DETAILS",
    movieDetails: results
  }
}

export function getTrailer(results){
  return {
    type: "GET_TRAILER",
    trailer: results.find(movie => movie.type === "Trailer").key
  }
}

export function sortMovies(sortParam){
  return {
    type: "SORT_MOVIES",
    sortParam
  }
}


export default fetchMovies;
