import React from 'react';
import connect from 'react-redux/es/connect/connect';

import { openAdvancedSearchModal } from '../actions/modal';

const AdvancedSearchButton = ({ openSearchModal }) => (
  <div className="m-t-xs btn-group" style={{ marginTop: '17px', marginLeft: '20px' }}>
    <button className="btn btn-xs btn-white" type="button" onClick={() => openSearchModal()}> Discover </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  openSearchModal: () => {
    dispatch(openAdvancedSearchModal());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AdvancedSearchButton);
