import React from 'react';

export default function MovieTable(props){
  let counter = 1;

  const movies = (
    props.movies.map(movie => (
      <tr key={movie.id}>
        <th scope="row">{counter++}</th>
        <td>{movie.id}</td>
        <td>{movie.title}</td>
        <td>{movie.release_date.substring(0,4)}</td>
        <td>{movie.vote_average}</td>
      </tr>))
  );

  return(
    <table className="table" style={{margin: "0 20px"}}>
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">Rating</th>
      </tr>
      </thead>
      <tbody>
      {movies}
      </tbody>
    </table>
  )
}