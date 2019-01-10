import connect from "react-redux/es/connect/connect";
import React from 'react';
import fetchMovies from './../actions/movieActions';

class TopMoviesContainer extends React.Component {
  render() {
    return(
      <div className="m-t-xs btn-group" style={{marginTop: '17px', marginLeft: '20px'}}>
        <a href="" className="btn btn-xs btn-white" onClick={this.props.onClick}> Top Movies </a>
      </div>
    )}
}

const MapDispatchToProps = (dispatch) => {
  return {
   onClick: () => {
     dispatch(fetchMovies());
   },
  }
};

export default TopMoviesContainer = connect(
  null,
  MapDispatchToProps,
)(TopMoviesContainer);

