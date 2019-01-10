import { combineReducers } from 'redux';

const initialState = {
  movieList: []
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

const rootReducer = combineReducers({
  fetchMoviesReducer
});

export default rootReducer;