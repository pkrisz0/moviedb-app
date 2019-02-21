import * as React from 'react';
import connect from 'react-redux/es/connect/connect';

import MovieTable from './MovieTable';
import MovieCard from './MovieCard';
import ResultsCounter from '../components/ResultsCounter';

import { fetchMovies } from '../actions/movie';

import MovieModalContainer from './MovieModalContainer';
import ViewSelectorContainer from './ViewSelectorContainer';
import SortByContainer from './SortByContainer';

import kubrick from '../helpers/kubrick.png';

class MovieDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies()); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    const { currentMovies, view } = this.props;

    // grid view could be a MovieGrid component
    const gridView = currentMovies.map(movie => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        year={movie.release_date.substring(0, 4)}
        rate={movie.vote_average}
        poster={movie.poster_path === null ? kubrick : `https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      />
    ));

    const tableView = <MovieTable movies={currentMovies} />;

    return (
      <div className="row" style={{ backgroundColor: 'white', padding: '25px' }}>
        <div className="col-lg-12" style={{ marginBottom: '25px', borderBottom: '1px solid #e7eaec' }}>
          <ViewSelectorContainer />
          <ResultsCounter count={currentMovies.length} />
          <SortByContainer style={{ float: 'left' }} />
        </div>
        {(view === 'table') ? tableView : gridView}
        <MovieModalContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMovies: state.movies.movieList,
  view: state.display.view,
});

export default connect(
  mapStateToProps,
  null,
)(MovieDashboard);
