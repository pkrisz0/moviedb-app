import React from 'react';
import connect from "react-redux/es/connect/connect";
import {openMovieModal} from "../actions/modalActions";
import './movieTable.css';

class MovieTable extends React.Component {
  render(){
    let counter = 1;

    const movies = (
      this.props.movies.map(movie => (
        <tr key={movie.id} onClick={() => this.props.openMovieModal(movie.id)} >
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    openMovieModal: (id) => {
      dispatch(openMovieModal(id))
    }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(MovieTable);