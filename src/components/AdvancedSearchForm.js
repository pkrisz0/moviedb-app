import React from 'react'
import { Field, reduxForm } from 'redux-form'
import grenreJson from './../actions/genreDictionary'

let AdvancedSearchForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const fieldStyle = {marginBottom: '15px', textAlign: 'center'};
  let genres = grenreJson.genres;
  let selection = genres.map((genre) => <option value={genre.id} key={genre.id}>{genre.name}</option>);

  return (
    <form onSubmit={handleSubmit} className='form-group col-lg-12'>
          <div>
            <Field
              name="keyword"
              component="input"
              type="text"
              placeholder="Keyword"
              className='form-control'
              style={fieldStyle}
            />
          </div>
          <div>
            <Field
              name="year"
              component="input"
              type="text"
              placeholder="Year"
              className='form-control'
              style={fieldStyle}
            />
        </div>
          <div>
            <Field
              name="rating"
              component="input"
              type="text"
              placeholder="min. Rating"
              className='form-control'
              style={fieldStyle}
            />
        </div>
        <div>
          <Field
            component="select"
            name="genre"
            className="custom-select"
            style={{textAlignLast: 'center', paddingRight: '29px'}}
          >
            <option value="" disabled>Genre</option>
            {selection}
          </Field>
        </div>
        <div style={{textAlign: 'center', marginTop: '15px'}}>
          <button type="submit" disabled={pristine || submitting} className='btn btn-xs btn-white center-block' style={{marginRight: '15px'}}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-xs btn-white pull-right center-block'>
            Clear Values
          </button>
        </div>
    </form>
  )
};

export default reduxForm({
  form: 'advancedsearch' // a unique identifier for this form
})(AdvancedSearchForm)
