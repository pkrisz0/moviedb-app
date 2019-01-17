import React from 'react';
import movieDB from '../helpers/moviiDB.png';

export default () => (
  <div className="footer">
    <div className="float-left">
      <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer"><img alt="thanks_movie_db" style={{ height: '35px' }} src={movieDB} /></a>
    </div>
    <div className="float-right" style={{ paddingTop: '10px' }}>
      <p> Kiscica Bt.</p>
    </div>
  </div>
);
