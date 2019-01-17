import React from 'react';
import kubrick from '../helpers/kubrick.png';


export default function MovieModalContent({ movie, trailer }) {
  const imdb = `https://imdb.com/${movie.imdb_id}`;
  const embeddedVideo = trailer === undefined ? '' : (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${trailer}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="trailer"
    />
  );
  const genres = movie.genres.map(genre => genre.name).join(', ');

  return (
    <div style={{ textAlign: 'center' }}>
      <a href={imdb} target="_blank" rel="noopener noreferrer" title="View on IMDB"><h1>{movie.title}</h1></a>
      <img alt={movie.title} style={{ width: '560px' }} src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : kubrick} />
      <p style={{ textAlign: 'justify', margin: '15px 0' }}>{movie.overview}</p>
      { embeddedVideo }
      <ul
        className="float-left"
        style={{
          marginTop: '15px', listStyleType: 'none', textAlign: 'left', padding: '5px',
        }}
      >
        <li>
          <strong>Genres: </strong>
          {genres}
        </li>
        <li>
          <strong>Release Date: </strong>
          {movie.release_date}
        </li>
        <li>
          <strong>Rating: </strong>
          {movie.vote_average}
        </li>
      </ul>
    </div>
  );
}
