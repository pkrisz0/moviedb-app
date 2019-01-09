import axios from 'axios';
import { API_KEY } from './key'


const TOP_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+ API_KEY + '&language=en-US&page=1';
function fetchMovies() {
  return dispatch => {
    return axios.get(TOP_MOVIES_URL)
      .then((response) =>{
        dispatch(getMovies(response.data.results))
      })
  };
}

export function getMovies(results){
  return{
    type: "GET_TOP_MOVIES",
    movies: results
  }
}

export default fetchMovies;
