import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fetchMoviesReducer from './movie';
import displayReducer from './display';
import modalReducer from './modal';

const rootReducer = combineReducers({
  movies: fetchMoviesReducer,
  form: formReducer,
  display: displayReducer,
  modal: modalReducer,
});

export default rootReducer;
