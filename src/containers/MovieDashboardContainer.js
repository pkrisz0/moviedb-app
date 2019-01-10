import connect from "react-redux/es/connect/connect";
import React from 'react';
import MovieCard from './../components/MovieCard';
import fetchMovies from './../actions/movieActions';
import ViewSelectorContainer from './ViewSelectorContainer';
import MovieTable from '../components/MovieTable';

class MovieDashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { currentMovies, view } = this.props;

    const gridView =
      currentMovies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date.substring(0,4)}
          rate={movie.vote_average}
          poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path} />
      ));

    const tableView = <MovieTable
       movies={currentMovies}
    />;
    const content = (view === 'table') ? tableView : gridView;

    console.log(view);
    return (
      <div className="row" style={{backgroundColor: "white", padding: "25px"}}>
        <ViewSelectorContainer />
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovies: state.fetchMoviesReducer.movieList,
    view: state.display.view,
  }
};

const MovieDashboardContainer = connect(
  mapStateToProps,
  null
)(MovieDashboard);

export default MovieDashboardContainer;