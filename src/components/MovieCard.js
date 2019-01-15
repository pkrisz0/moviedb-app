import React from 'react';
import './movieCard.css';
import { openMovieModal } from "../actions/modalActions";
import connect from "react-redux/es/connect/connect";

class MovieCard extends React.Component {
  render(){
    return (
      <div className="contact-box center-version movie-card" style={{margin: "15px auto", width: "240px", height: '450px', borderRadius: '3px'}} >
        <div style={{margin: 'auto', padding: "15px", textAlign: 'center'}}>
          <img alt="poster" style={{height: "250px", width: "200px", marginBottom: '10px', borderRadius: '3px'}} src={this.props.poster}/>
          <h3 className="m-b-xs"><strong>{this.props.title}</strong></h3>
          <div className="font-bold">({this.props.year ? this.props.year : '-'})</div>
          <div className="m-b-xs">{this.props.rate}</div>
        </div>
        <div className="contact-box-footer">
          <div className="m-t-xs btn-group">
            <button className="btn btn-xs btn-white" onClick={() => this.props.openMovieModal(this.props.id)}> More </button>
          </div>
        </div>
      </div>
    );
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
)(MovieCard);