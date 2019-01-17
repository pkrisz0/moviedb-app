import React from 'react';
import connect from 'react-redux/es/connect/connect';
import ReactModal from 'react-modal';

import { fetchMovieDetails, fetchTrailer } from '../actions/movie';
import { closeMovieModal } from '../actions/modal';
import MovieModalContent from '../components/MovieModalContent';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '610px',
  },
};

class MovieModalContainer extends React.Component {
  componentWillReceiveProps({ movieId, getMovie, getTrailer }) {
    if (movieId && this.props.movieId !== movieId) { // eslint-disable-line
      getMovie(movieId);
      getTrailer(movieId);
    }
  }

  render() {
    const {
      isOpen, closeModal, movie, trailer,
    } = this.props;

    const modalContent = movie ? <MovieModalContent movie={movie} trailer={trailer} /> : 'Loading...';
    return (
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="movie-modal"
        ariaHideApp={false}
      >
        {modalContent}
      </ReactModal>
    );
  }
}

const mapStateToProps = ({ modal, movies }) => ({
  isOpen: modal.movieModalIsOpen,
  movieId: modal.movieId,
  movie: movies.movie,
  trailer: movies.trailer,
});

const mapDispatchToProps = dispatch => ({
  getTrailer: (id) => {
    dispatch(fetchTrailer(id));
  },
  getMovie: (id) => {
    dispatch(fetchMovieDetails(id));
  },
  closeModal: () => {
    dispatch(closeMovieModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieModalContainer);
