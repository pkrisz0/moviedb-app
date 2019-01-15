import React from 'react';
import { Field, reduxForm } from 'redux-form';
import grenreJson from './../actions/genreDictionary';
import keywords from './../actions/keywords';

let AdvancedSearchForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const fieldStyle = {marginBottom: '15px', textAlign: 'center'};
  let genre_selection = grenreJson.genres.map((genre) => <option value={genre.id} key={genre.id}>{genre.name}</option>);
  let keyword_select = keywords.keywords.map((keyword) => <option value={keyword.id} key={keyword.id}>{keyword.name}</option>);

  return (
    <form onSubmit={handleSubmit} className='form-group col-lg-12'>
          <div>
            <Field
              component="select"
              name="keyword"
              className="custom-select"
              style={{textAlignLast: 'center', paddingRight: '29px', marginBottom: '15px'}}
            >
              <option value="" disabled>Keyword</option>
              {keyword_select}
            </Field>
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
            {genre_selection}
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
        </div>
    </form>
  )
};

export default reduxForm({
  form: 'advancedsearch' // a unique identifier for this form
})(AdvancedSearchForm)
