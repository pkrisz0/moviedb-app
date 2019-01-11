import connect from "react-redux/es/connect/connect";
import React from 'react';
import { fetchMovieDetails } from './../actions/movieActions';
import { closeMovieModal } from './../actions/modalActions';
import ReactModal from 'react-modal';
import MovieModalContent from '../components/MovieModalContent';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    padding: '25px'
  }
};

class MovieModalContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
      nextProps.fetchMovieDetails(nextProps.movieId);
    }
  }

render() {
  const { isOpen, closeMovieModal, movie } = this.props;

  const modalContent = movie ? <MovieModalContent movie={movie}/> : 'Loading...';

  return (
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={closeMovieModal}
        style={customStyles}
        contentLabel="movie-modal"
        ariaHideApp={false}
      >
        {modalContent}
      </ReactModal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.movieModal.isOpen,
    movieId: state.movieModal.movieId,
    movie: state.fetchMoviesReducer.movie
  }
};

export default connect(
  mapStateToProps,
  { closeMovieModal, fetchMovieDetails }
)(MovieModalContainer);
