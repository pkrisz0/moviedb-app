import {
  OPEN_MOVIE_MODAL, CLOSE_MOVIE_MODAL, CLOSE_ADVANCED_SEARCH_MODAL, OPEN_ADVANCED_SEARCH_MODAL,
} from '../actions/modal';

const initialState = {
  movieModalIsOpen: false,
  movieId: undefined,
  advancedSearchModalIsOpen: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MOVIE_MODAL:
      return {
        ...state,
        movieModalIsOpen: true,
        movieId: action.movieId,
      };
    case CLOSE_MOVIE_MODAL:
      return {
        ...state,
        movieModalIsOpen: false,
      };
    case CLOSE_ADVANCED_SEARCH_MODAL:
      return {
        ...state,
        advancedSearchModalIsOpen: false,
      };
    case OPEN_ADVANCED_SEARCH_MODAL:
      return {
        ...state,
        advancedSearchModalIsOpen: true,
      };
    default:
      return state;
  }
};
