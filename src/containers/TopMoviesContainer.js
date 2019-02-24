// @flow

import * as React from 'react';import connect from 'react-redux/es/connect/connect';

import { fetchMovies } from '../actions/movie';

const TopMoviesContainer = ({ onClick }) => (
  <div className="m-t-xs btn-group" style={{ marginTop: '17px', marginLeft: '10px' }}>
    <button className="btn btn-xs btn-white" type="button" onClick={onClick}> Top Movies </button>
  </div>
);

const MapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(fetchMovies());
  },
});

export default connect(
  null,
  MapDispatchToProps,
)(TopMoviesContainer);
