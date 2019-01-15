import React from 'react';
import kubrick from "../kubrick.png";


export default function MovieModalContent(props){
  console.log(props.movie);
  const imdb = "https://imdb.com/" + props.movie.imdb_id
  const trailer = props.trailer == undefined ? '' :  <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.trailer} frameBorder="0"
                                                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen title="trailer"></iframe>;
  const genres = props.movie.genres.map(genre => genre.name).join(", ");
  return(
    <div style={{textAlign: 'center'}}>
      <a href={imdb} target="_blank" rel="noopener noreferrer" title="View on IMDB"><h1>{props.movie.title}</h1></a>
      <img alt={props.movie.title} style={{width: '560px'}} src={props.movie.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path : kubrick}/>
      <p style={{textAlign: 'justify', margin: '15px 0'}}>{props.movie.overview}</p>
      { trailer }
      <ul className='float-left' style={{marginTop: '15px', listStyleType:'none', textAlign: 'left', padding: '5px'}}>
        <li><strong>Genres: </strong>{genres}</li>
        <li><strong>Release Date: </strong>{props.movie.release_date}</li>
        <li><strong>Rating: </strong>{props.movie.vote_average}</li>
      </ul>
    </div>
);
}
