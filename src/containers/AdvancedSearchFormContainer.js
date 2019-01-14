import React from 'react';
import { connect } from 'react-redux';
import AdvancedSearchForm from './../components/AdvancedSearchForm';
import {fetchAdvencedMovie} from "../actions/movieActions";

let AdvancedSearchFormContainer = ({ handleSubmit, values }) =>
  <AdvancedSearchForm
    onSubmit={values => handleSubmit(values)}
  />;

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: value => dispatch(fetchAdvencedMovie(value)),
});

export default AdvancedSearchFormContainer = connect(
  null,
  mapDispatchToProps
)(AdvancedSearchFormContainer);
