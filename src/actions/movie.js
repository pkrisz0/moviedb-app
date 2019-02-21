// @flow

import axios from 'axios';
import API_KEY from '../helpers/key';

export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_TRAILER = 'GET_TRAILER';
export const SORT_MOVIES = 'SORT_MOVIES';

export type MovieAction =
  { type: 'GET_TOP_MOVIES', movies: Array<Object> }
  | { type: 'SEARCH_MOVIES', movies: Array<Object> }
  | { type: 'GET_DETAILS', movieDetails: Array<Object> }
  | { type: 'GET_TRAILER', trailer: ?Object }
  | { type: 'SORT_MOVIES', sortParam: string };

type queryType = { rating: ?number, year: ?number, genre: ?string, keyword: ?string }

// eslint-disable-next-line
type ThunkAction = (dispatch: Dispatch) => any;
type Dispatch = (action: MovieAction | ThunkAction ) => any;

const TOP_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&include_adult=false`;
const FETCH_MOVIE_SEARCH_URL = `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=`;

function searchUrl(searchParams: queryType) {
  let baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false`;
  if (searchParams.rating) { baseUrl = `${baseUrl}&vote_average.gte=${searchParams.rating}`; }
  if (searchParams.year) { baseUrl = `${baseUrl}&primary_release_year=${searchParams.year}`; }
  if (searchParams.genre) { baseUrl = `${baseUrl}&with_genres=${searchParams.genre}`; }
  if (searchParams.keyword) { baseUrl = `${baseUrl}&with_keywords=${searchParams.keyword}`; }
  return baseUrl;
}

export function getMovies(results: Array<Object>): MovieAction {
  return {
    type: 'GET_TOP_MOVIES',
    movies: results,
  };
}

export function searchMovies(searchResults: Array<Object>): MovieAction {
  return {
    type: 'SEARCH_MOVIES',
    movies: searchResults,
  };
}

export function getDetails(results: Array<Object>): MovieAction {
  return {
    type: 'GET_DETAILS',
    movieDetails: results,
  };
}

export function getTrailer(results: Object): MovieAction {
  return {
    type: 'GET_TRAILER',
    trailer: results.length !== 0 ? results.find(movie => movie.type === 'Trailer').key : undefined,
  };
}

export function sortMovies(sortParam: string): MovieAction {
  return {
    type: 'SORT_MOVIES',
    sortParam,
  };
}

export function fetchMovies() {
  return (dispatch: Dispatch) => axios.get(TOP_MOVIES_URL)
    .then((response) => {
      dispatch(getMovies(response.data.results));
    });
}

export function fetchMovieSearch(query: string) {
  return (dispatch: Dispatch) => axios.get(FETCH_MOVIE_SEARCH_URL + query)
    .then((response) => {
      dispatch(searchMovies(response.data.results));
    });
}

export function fetchMovieDetails(movieID: number) {
  return(dispatch: Dispatch) => axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&include_adult=false`)
    .then((response) => {
      dispatch(getDetails(response.data));
    });
}

export function fetchTrailer(movieID: number) {
  return (dispatch: Dispatch) => axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&include_adult=false`)
    .then((response) => {
      dispatch(getTrailer(response.data.results));
    });
}

export function fetchAdvencedMovie(query: queryType) {
  return (dispatch: Dispatch) => axios.get(searchUrl(query))
    .then((response) => {
      dispatch(searchMovies(response.data.results));
    });
}
