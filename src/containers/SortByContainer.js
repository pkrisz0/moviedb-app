// @flow

import * as React from 'react';import { connect } from 'react-redux';

import SortBy from './SortBy';
import { sortMovies } from '../actions/movie';

let SortByContainer = ({ handleSortSubmit }) => (
  <SortBy
    onSubmit={values => handleSortSubmit(values.sorted)}
  />
);

const mapDispatchToProps = dispatch => ({
  handleSortSubmit: value => dispatch(sortMovies(value)),
});

export default SortByContainer = connect(
  null,
  mapDispatchToProps,
)(SortByContainer);
