import React from 'react';
import kubrick from "../kubrick.png";
import SearchBar from "../containers/SearchBarContainer";

export default function Header(props){
    return(
      <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0, backgroundColor: "white", width: "100%"}}>
        <div className="navbar-header">
          <SearchBar />
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <span className="m-r-sm text-muted welcome-message">
              THE MOVIE APP
              <img alt="stg" className="rounded-circle" src={kubrick} style={{height: "20px", width: "18px", marginLeft: "10px"}}/>
            </span>
          </li>
        </ul>
      </nav>
    );
}