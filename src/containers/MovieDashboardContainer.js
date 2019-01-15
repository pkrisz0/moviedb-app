import connect from "react-redux/es/connect/connect";
import React from 'react';
import fetchMovies from './../actions/movieActions';
import ViewSelectorContainer from './ViewSelectorContainer';
import MovieTable from '../components/MovieTable';
import MovieModalContainer from './MovieModalContainer';
import MovieCard from './../components/MovieCard';
import SortByContainer from './SortByContainer';
import ResultsCounter from './../components/ResultsCounter';

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
          id={movie.id}
          title={movie.title}
          year={movie.release_date.substring(0,4)}
          rate={movie.vote_average}
          poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
        />
      ));

    const tableView = <MovieTable
       movies={currentMovies}
    />;
    const content = (view === 'table') ? tableView : gridView;

    return (
      <div className="row" style={{backgroundColor: "white", padding: "25px"}}>
        <div className='col-lg-12' style={{marginBottom: '25px'}}>
          <ViewSelectorContainer />
          <ResultsCounter count={currentMovies.length}/>
          <SortByContainer style={{float: "left"}} />
        </div>
        {content}
        <MovieModalContainer />
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