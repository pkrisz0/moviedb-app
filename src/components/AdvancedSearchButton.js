import React from 'react';
import {openAdvancedSearchModal} from "../actions/modalActions";
import connect from "react-redux/es/connect/connect";

class AdvancedSearchButton extends React.Component {
  render(){
    return(
      <div className="m-t-xs btn-group" style={{marginTop: '17px', marginLeft: '20px'}}>
        <button className="btn btn-xs btn-white" onClick={() => this.props.openAdvancedSearchModal()}> Discover </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openAdvancedSearchModal: () => {
      dispatch(openAdvancedSearchModal())
    }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(AdvancedSearchButton);