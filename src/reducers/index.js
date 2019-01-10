import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  movieList: [],
  view: 'table',
};

function fetchMoviesReducer(state = initialState, action) {
  switch(action.type) {
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
    default:
      return state;
  }
}

function displayReducer(state = initialState, action) {
  switch(action.type) {
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

const rootReducer = combineReducers({
  fetchMoviesReducer,
  form: formReducer,
  display: displayReducer,
});

export default rootReducer;