import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

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
  fetchMoviesReducer,
  form: formReducer,
});

export default rootReducer;