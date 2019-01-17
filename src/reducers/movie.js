import {
  GET_TOP_MOVIES, SEARCH_MOVIES, GET_DETAILS, GET_TRAILER, SORT_MOVIES,
} from '../actions/movie';

const initialState = {
  movieList: [],
  movie: undefined,
  movieId: undefined,
  trailer: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return {
        ...state,
        movieList: action.movies,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movieList: action.movies,
      };
    case GET_DETAILS:
      return {
        ...state,
        movie: action.movieDetails,
      };
    case GET_TRAILER:
      return {
        ...state,
        trailer: action.trailer,
      };
    case SORT_MOVIES:
      return {
        movieList: state.movieList.slice().sort((movie1, movie2) => {
          if (action.sortParam === 'title') {
            return movie1.title.localeCompare(movie2.title);
          }
          if (action.sortParam === 'year') {
            return movie1.release_date < movie2.release_date ? 1 : -1;
          }
          return movie1.vote_average < movie2.vote_average ? 1 : -1;
        }),
      };
    default:
      return state;
  }
};
