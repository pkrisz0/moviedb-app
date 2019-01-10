import connect from "react-redux/es/connect/connect";
import React from 'react';
import { showGrid } from "../actions/displayActions";
import { showTable } from "../actions/displayActions";
import Octicon from 'react-octicon';


class ViewSelectorContainer extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: '0 15px 20px 15px'}}>
        <div className="m-t-xs btn-group" style={{marginBottom: '10px'}}>
          <a href="" className="btn btn-xs btn-white" onClick={this.props.onClickGrid}><Octicon style={{padding: '3px'}} name="versions"/></a>
          <a href="" className="btn btn-xs btn-white" onClick={this.props.onClickTable}><Octicon style={{padding: '3px'}} name="list-unordered"/></a>
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