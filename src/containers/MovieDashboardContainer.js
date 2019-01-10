import connect from "react-redux/es/connect/connect";
import React from 'react';
import MovieCard from './../components/MovieCard';
import fetchMovies from './../actions/movieActions';

class MovieDashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { currentMovies } = this.props;

    return(
      currentMovies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date.substring(0,4)}
          rate={movie.vote_average}
          poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path} />
      )))
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovies: state.fetchMoviesReducer.movieList,
  }
};

const MovieDashboardContainer = connect(
  mapStateToProps,
  null
)(MovieDashboard);

export default MovieDashboardContainer;