import connect from "react-redux/es/connect/connect";
import React from 'react';
import { fetchMovieDetails, fetchTrailer } from './../actions/movieActions';
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
    width                 : '610px'
  }
};

class MovieModalContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
      nextProps.fetchMovieDetails(nextProps.movieId);
      nextProps.fetchTrailer(nextProps.movieId);
    }
  }

render() {
  const { isOpen, closeMovieModal, movie, trailer } = this.props;

  const modalContent = movie ? <MovieModalContent movie={movie} trailer={trailer}/> : 'Loading...';
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
    isOpen: state.modal.isOpen,
    movieId: state.modal.movieId,
    movie: state.fetchMoviesReducer.movie,
    trailer: state.fetchMoviesReducer.trailer
  }
};

export default connect(
  mapStateToProps,
  { closeMovieModal, fetchMovieDetails, fetchTrailer }
)(MovieModalContainer);
