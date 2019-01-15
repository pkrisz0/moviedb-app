import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Octicon from 'react-octicon';

let SortBy = ({ handleChange, handleSubmit }) => {
  return(
    <div style={{maxWidth: '150px', float: 'right'}}>
      <form onSubmit={handleSubmit} style={{ height: '25px', display: 'inline-flex'}} >
          <Field
            component="select"
            name="sorted"
            className="custom-select"
            placeholder='blablah'
            onChange={handleChange}
            style={{marginRight: "-2px"}}
          >
            <option value="" disabled>Sort by...</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </Field>
          <button type="submit" className="btn btn-xs btn-white" style={{height: '38px', marginLeft: "-2px"}}><Octicon style={{padding: '3px'}} name="rocket"/></button>
      </form>
    </div>
  )
};


export default SortBy = reduxForm({
  form: 'SortBy',
})(SortBy);
