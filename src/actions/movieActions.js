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
  return dispatch => {
    return axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key='+ API_KEY +'&include_adult=false')
      .then((response) =>{
        dispatch(getDetails(response.data))
      })
  };
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

export default fetchMovies;
