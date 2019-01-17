import React from 'react';
import connect from 'react-redux/es/connect/connect';

import { openMovieModal } from '../actions/modal';

import '../helpers/movieTable.css';

const MovieTable = ({ movies, openModal }) => {
  const elementList = movies.map((movie, idx) => (
    <tr key={movie.id} onClick={() => openModal(movie.id)}>
      <th scope="row">{idx + 1}</th>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.release_date.substring(0, 4)}</td>
      <td>{movie.vote_average}</td>
    </tr>));

  return (
    <table className="table" style={{ margin: '0 20px' }}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Year</th>
          <th scope="col">Rating</th>
        </tr>
      </thead>
      <tbody>
        {elementList}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = dispatch => ({
  openModal: (id) => {
    dispatch(openMovieModal(id));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(MovieTable);
