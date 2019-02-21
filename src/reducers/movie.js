// @flow

import {
  GET_TOP_MOVIES, SEARCH_MOVIES, GET_DETAILS, GET_TRAILER, SORT_MOVIES,
} from '../actions/movie';
import type { MovieAction } from '../actions/movie';
import sortMovies from '../helpers/sort_movies';

type State = {
  +movieList: Array<Object>,
  +movie: ?Array<Object>,
  +movieId: ?number,
  +trailer: ?string,
}

const initialState: State = {
  movieList: [],
  movie: undefined,
  movieId: undefined,
  trailer: undefined,
};

export default (state: State = initialState, action: MovieAction): State => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return {
        ...state,
        movieList: action.movies,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movieList: action.movies,
      };
    case GET_DETAILS:
      return {
        ...state,
        movie: action.movieDetails,
      };
    case GET_TRAILER:
      return {
        ...state,
        trailer: action.trailer,
      };
    case SORT_MOVIES:
      return {
        ...state,
        movieList: sortMovies(state.movieList, action.sortParam)
      };
    default:
      return state;
  }
};
