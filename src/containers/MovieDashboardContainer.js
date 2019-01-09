import connect from "react-redux/es/connect/connect";
import React from 'react';
import MovieCard from './../components/MovieCard'

const MovieDashboard = (props) => {
  return(
    props.currentMovies.map(movie => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        year={movie.year}
        rate={movie.rate}
        poster={movie.poster} />
  )))
};

const mapStateToProps = (state) => {
  return {
    currentMovies: state.movies.movieList
  }
};

const MovieDashboardContainer = connect(
  mapStateToProps,
  null
)(MovieDashboard);

export default MovieDashboardContainer;