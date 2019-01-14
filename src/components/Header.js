import React from 'react';
import kubrick from "../kubrick.png";
import SearchBar from "../containers/SearchBarContainer";
import TopMoviesContainer from '../containers/TopMoviesContainer';
import AdvancedSearchButton from "./AdvancedSearchButton";
import AdvancedSearchModalContainer from './../containers/AdvancedSearchModalContainer';

export default function Header(props){
    return(
      <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0, backgroundColor: "white", width: "100%"}}>
        <div className="navbar-header" style={{ display: '-webkit-inline-box'}}>
          <SearchBar />
          <AdvancedSearchButton />
          <TopMoviesContainer />
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <span className="m-r-sm text-muted welcome-message">
              THE MOVIE APP
              <img alt="stg" src={kubrick} style={{height: "20px", width: "18px", marginLeft: "10px"}}/>
            </span>
          </li>
        </ul>
        <AdvancedSearchModalContainer />
      </nav>
    );
}