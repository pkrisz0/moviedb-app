import React from 'react';
import { connect } from 'react-redux';
import SortBy from './../components/SortBy';
import { sortMovies } from "../actions/movieActions";

let SortByContainer = ({ handleSortSubmit, values }) =>
  <SortBy
    onSubmit={values => handleSortSubmit(values.sorted)}
  />;

const mapDispatchToProps = (dispatch) => ({
  handleSortSubmit: value => dispatch(sortMovies(value)),
});

export default SortByContainer = connect(
  null,
  mapDispatchToProps
)(SortByContainer);
