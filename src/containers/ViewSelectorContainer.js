import React from 'react';
import connect from 'react-redux/es/connect/connect';
import Octicon from 'react-octicon';

import { showGrid, showTable } from '../actions/display';

const ViewSelectorContainer = ({ onClickGrid, onClickTable }) => (
  <div style={{ height: '25px', float: 'left' }}>
    <div className="m-t-xs btn-group" style={{ marginBottom: '10px' }}>
      <button className="btn btn-xs btn-white" type="button" onClick={onClickGrid}><Octicon style={{ padding: '3px' }} name="versions" /></button>
      <button className="btn btn-xs btn-white" type="button" onClick={onClickTable}><Octicon style={{ padding: '3px' }} name="list-unordered" /></button>
    </div>
  </div>
);

const MapDispatchToProps = dispatch => ({
  onClickGrid: () => {
    dispatch(showGrid());
  },
  onClickTable: () => {
    dispatch(showTable());
  },
});

export default connect(
  null,
  MapDispatchToProps,
)(ViewSelectorContainer);
