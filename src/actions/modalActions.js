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