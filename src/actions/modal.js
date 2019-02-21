// @flow

export const OPEN_MOVIE_MODAL = 'OPEN_MOVIE_MODAL';
export const CLOSE_MOVIE_MODAL = 'CLOSE_MOVIE_MODAL';
export const CLOSE_ADVANCED_SEARCH_MODAL = 'CLOSE_ADVANCED_SEARCH_MODAL';
export const OPEN_ADVANCED_SEARCH_MODAL = 'OPEN_ADVANCED_SEARCH_MODAL';

export type ModalAction = {
  type: 'OPEN_MOVIE_MODAL', movieId: number }
  | { type: 'CLOSE_MOVIE_MODAL' }
  | { type: 'CLOSE_ADVANCED_SEARCH_MODAL' }
  | { type: 'OPEN_ADVANCED_SEARCH_MODAL' };

export function openMovieModal(movieId: number): ModalAction {
  return {
    type: 'OPEN_MOVIE_MODAL',
    movieId,
  };
}

export function closeMovieModal(): ModalAction {
  return {
    type: 'CLOSE_MOVIE_MODAL',
  };
}

export function closeAdvancedSearchModal(): ModalAction {
  return {
    type: 'CLOSE_ADVANCED_SEARCH_MODAL',
  };
}

export function openAdvancedSearchModal(): ModalAction {
  return {
    type: 'OPEN_ADVANCED_SEARCH_MODAL',
  };
}
