import React from 'react';
import './movieCard.css';

export default function MovieCard(props)  {
    return (
      <div className="contact-box center-version movie-card" style={{margin: "0 15px"}}>
        <a href="">
          <img alt="poster" style={{height: "250px", width: "200px"}} src={props.poster}/>
            <h3 className="m-b-xs"><strong>{props.title}</strong></h3>
            <div className="font-bold">({props.year})</div>
            <div className="m-b-xs">{props.rate}</div>
        </a>
        <div className="contact-box-footer">
          <div className="m-t-xs btn-group">
            <a href="" className="btn btn-xs btn-white"><i className="fa fa-phone"></i> Trailer </a>
          </div>
        </div>
      </div>
    );
}
