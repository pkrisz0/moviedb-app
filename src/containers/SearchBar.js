import React from 'react';
import { reduxForm, Field } from 'redux-form';

const validate = values => (!values.searchTerm
  ? { searchTerm: 'How dare you...' }
  : {});

const renderField = ({
  input,
  label,
  type,
  meta: { error, touched },
}) => (
  <div>
    { /* eslint-disable-next-line */ }
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder="Search for a movie..."
        type={type}
        style={{
          width: '300px', border: 'none', borderBottom: '1px solid #888888', paddingLeft: '15px',
        }}
      />
      {touched && error && <span style={{ color: 'red', marginLeft: '10px' }}>{error}</span>}
    </div>
  </div>
);

const SearchBar = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit}>
    <div style={{ marginLeft: '15px', marginBottom: '15px' }}>
      <i className="fas fa-search" style={{ ariaHidden: 'true' }} />
      <Field
        component={renderField}
        name="searchTerm"
        onChange={handleChange}
        type="text"
        value={value}
      />
    </div>
  </form>
);

export default reduxForm({
  form: 'SearchBar',
  validate,
})(SearchBar);
