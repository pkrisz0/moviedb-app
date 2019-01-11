import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  movieList: [],
  movie: undefined,
  view: 'grid',
  isOpen: false,
  movieId: undefined,
};

function fetchMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TOP_MOVIES':
      return {
        ...state,
        movieList: action.movies
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        movieList: action.movies
      };
    case 'GET_DETAILS':
      return {
        ...state,
        movie: action.movieDetails
      };
    default:
      return state;
  }
}

function displayReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_GRID':
      return {
        ...state,
        view: 'grid'
      };
    case 'SHOW_TABLE':
      return {
        ...state,
        view: 'table'
      };
    default:
      return state;
  }
}

function movieModalReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MOVIE_MODAL':
      return {
        ...state,
        isOpen: true,
        movieId: action.movieId,
      };
    case 'CLOSE_MOVIE_MODAL':
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fetchMoviesReducer,
  form: formReducer,
  display: displayReducer,
  movieModal: movieModalReducer
});

export default rootReducer;