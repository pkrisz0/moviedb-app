// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import AdvancedSearchForm from './AdvancedSearchForm';
import { fetchAdvencedMovie } from '../actions/movie';

let AdvancedSearchFormContainer = ({ handleSubmit }) => (
  <AdvancedSearchForm
    onSubmit={values => handleSubmit(values)}
  />
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: value => dispatch(fetchAdvencedMovie(value)),
});

export default AdvancedSearchFormContainer = connect(
  null,
  mapDispatchToProps,
)(AdvancedSearchFormContainer);
