// @flow

import {
  OPEN_MOVIE_MODAL, CLOSE_MOVIE_MODAL, CLOSE_ADVANCED_SEARCH_MODAL, OPEN_ADVANCED_SEARCH_MODAL,
} from '../actions/modal';

import type { ModalAction } from '../actions/modal';

type State = {
  +movieModalIsOpen: boolean,
  +movieId: ?number,
  +advancedSearchModalIsOpen: boolean
}

const initialState: State = {
  movieModalIsOpen: false,
  movieId: undefined,
  advancedSearchModalIsOpen: false,
};

export default (state: State = initialState, action: ModalAction): State => {
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
