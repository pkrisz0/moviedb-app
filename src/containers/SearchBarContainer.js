// @flow

import * as React from 'react';import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchMovieSearch } from '../actions/movie';

let SearchBarContainer = ({ handleSearchSubmit }) => (
  <SearchBar
    onSubmit={values => handleSearchSubmit(values.searchTerm)}
  />
);

const mapDispatchToProps = dispatch => ({
  handleSearchSubmit: value => dispatch(fetchMovieSearch(value)),
});

export default SearchBarContainer = connect(
  null,
  mapDispatchToProps,
)(SearchBarContainer);
