export function openMovieModal(movieId) {
  return {
    type: 'OPEN_MOVIE_MODAL',
    movieId
  };
}

export function closeMovieModal() {
  return {
    type: 'CLOSE_MOVIE_MODAL'
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