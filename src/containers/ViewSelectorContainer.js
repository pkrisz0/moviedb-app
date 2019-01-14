import connect from "react-redux/es/connect/connect";
import React from 'react';
import { showGrid } from "../actions/displayActions";
import { showTable } from "../actions/displayActions";
import Octicon from 'react-octicon';

class ViewSelectorContainer extends React.Component {
  render() {
    return(
      <div style={{height: '25px', float: 'left'}}>
        <div className="m-t-xs btn-group" style={{marginBottom: '10px'}}>
          <button className="btn btn-xs btn-white" onClick={this.props.onClickGrid}><Octicon style={{padding: '3px'}} name="versions"/></button>
          <button className="btn btn-xs btn-white" onClick={this.props.onClickTable}><Octicon style={{padding: '3px'}} name="list-unordered"/></button>
        </div>
      </div>
    )}
}

const MapDispatchToProps = (dispatch) => {
  return {
    onClickGrid: () => {
      dispatch(showGrid());
    },
    onClickTable: () => {
      dispatch(showTable());
    }
  }
};

export default ViewSelectorContainer = connect(
  null,
  MapDispatchToProps,
)(ViewSelectorContainer);