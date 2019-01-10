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
  console.log(query);
  return dispatch => {
    return axios.get('http://api.themoviedb.org/3/search/movie?api_key='+ API_KEY + '&query=' + query + '&include_adult=false')
      .then((response) =>{
        dispatch(searchMovies(response.data.results))
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

export default fetchMovies;
