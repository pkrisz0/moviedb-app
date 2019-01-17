import React from 'react';

import AdvancedSearchButton from '../containers/AdvancedSearchButton';
import SearchBar from '../containers/SearchBarContainer';
import TopMoviesContainer from '../containers/TopMoviesContainer';
import AdvancedSearchModalContainer from '../containers/AdvancedSearchModalContainer';

import kubrick from '../helpers/kubrick.png';

export default () => (
  <nav
    className="navbar navbar-static-top"
    role="navigation"
    style={{
      marginBottom: 0, backgroundColor: 'white', width: '100%', padding: '0 8px',
    }}
  >
    <div className="navbar-header" style={{ display: '-webkit-inline-box' }}>
      <SearchBar />
      <AdvancedSearchButton />
      <TopMoviesContainer />
    </div>
    <ul className="nav navbar-top-links navbar-right">
      <li>
        <span className=" text-muted welcome-message">
          THE MOVIE APP
          <img alt="stg" src={kubrick} style={{ height: '20px', width: '18px', marginLeft: '10px' }} />
        </span>
      </li>
    </ul>
    <AdvancedSearchModalContainer />
  </nav>
);
