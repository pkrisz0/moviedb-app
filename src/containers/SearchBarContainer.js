import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './../components/SearchBar';
import { fetchMovieSearch } from "../actions/movieActions";

let SearchBarContainer = ({ handleSearchSubmit, values }) =>
  <SearchBar
    onSubmit={values => handleSearchSubmit(values.searchTerm)}
  />;

const mapDispatchToProps = (dispatch) => ({
  handleSearchSubmit: value => dispatch(fetchMovieSearch(value)),
});

export default SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);
