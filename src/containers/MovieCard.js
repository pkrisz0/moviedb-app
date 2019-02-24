// @flow

import * as React from 'react';
import connect from 'react-redux/es/connect/connect';

import { openMovieModal } from '../actions/modal';

import '../helpers/movieCard.css';

const MovieCard = ({
  poster, year, title, rate, id, openModal,
}) => (
  <div
    className="contact-box center-version movie-card"
    style={{
      margin: '15px auto', width: '240px', height: '450px', borderRadius: '3px',
    }}
  >
    <div style={{ margin: 'auto', padding: '15px', textAlign: 'center' }}>
      <img
        alt="poster"
        style={{
          height: '250px', width: '200px', marginBottom: '10px', borderRadius: '3px',
        }}
        src={poster}
      />
      <h3 className="m-b-xs"><strong>{title}</strong></h3>
      <div className="font-bold">
          { year || '-' }
      </div>
      <div className="m-b-xs">{rate}</div>
    </div>
    <div className="contact-box-footer">
      <div className="m-t-xs btn-group">
        <button className="btn btn-xs btn-white" type="button" onClick={() => openModal(id)}> More </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  openModal: id => dispatch(openMovieModal(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(MovieCard);
