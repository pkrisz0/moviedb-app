import React from 'react';
import { fetchMovieSearch } from './../actions/movieActions';
import connect from "react-redux/es/connect/connect";

class SearchBarContainer extends React.Component {
  render(){
    return(
      <div id="custom-search-input">
        <div className="input-group col-md-12">
          <input type="text" className="form-control input-lg" placeholder="Look for a movie" />
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button" onClick={this.props.onClick}>
                  <i>GO</i>
              </button>
            </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchMovieSearch());
    }
  }
};

export default SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);
