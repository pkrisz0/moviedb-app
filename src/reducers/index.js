import { combineReducers } from 'redux';

const initialState = {
  movieList: [],
  loading: false,
  error: null
};

function fetchMoviesReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_TOP_MOVIES':
      return {
        ...state,
        loading: false,
        error: null,
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