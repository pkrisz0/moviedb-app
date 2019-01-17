export const OPEN_MOVIE_MODAL = 'OPEN_MOVIE_MODAL';
export const CLOSE_MOVIE_MODAL = 'CLOSE_MOVIE_MODAL';
export const CLOSE_ADVANCED_SEARCH_MODAL = 'CLOSE_ADVANCED_SEARCH_MODAL';
export const OPEN_ADVANCED_SEARCH_MODAL = 'OPEN_ADVANCED_SEARCH_MODAL';

export function openMovieModal(movieId) {
  return {
    type: 'OPEN_MOVIE_MODAL',
    movieId,
  };
}

export function closeMovieModal() {
  return {
    type: 'CLOSE_MOVIE_MODAL',
  };
}

export function closeAdvancedSearchModal() {
  return {
    type: 'CLOSE_ADVANCED_SEARCH_MODAL',
  };
}

export function openAdvancedSearchModal() {
  return {
    type: 'OPEN_ADVANCED_SEARCH_MODAL',
  };
}
