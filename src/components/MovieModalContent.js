import React from 'react';

export default function MovieModalContent(props){
  const trailer_url = "https://www.youtube.com/embed/" + props.trailer;
  return(
      <div style={{textAlign: 'center'}}>
        <img alt={props.movie.title} style={{width: '560px'}} src={'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path}/>
        <h1>{props.movie.title}</h1>
        <p style={{textAlign: 'justify'}}>{props.movie.overview}</p>

        <iframe width="560" height="315" src={trailer_url} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen title="trailer"></iframe>
      </div>
  );
}

