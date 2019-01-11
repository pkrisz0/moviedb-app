import React from 'react';

export default function MovieModalContent(props){
  return(
      <div style={{textAlign: 'center'}}>
        <img alt="image" style={{width: '100%'}} src={'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path}/>
        <h1>{props.movie.title}</h1>
        <p style={{textAlign: 'justify'}}>{props.movie.overview}</p>
      </div>
  );
}

