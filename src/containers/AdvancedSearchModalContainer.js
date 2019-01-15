import connect from "react-redux/es/connect/connect";
import React from 'react';
import ReactModal from 'react-modal';
import { closeAdvancedSearchModal } from './../actions/modalActions';
import AdvancedSearchFormContainer from './../containers/AdvancedSearchFormContainer';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    padding: '25px'
  }
};

class AdvancedSearchModalContainer extends React.Component {
  render() {
    const { isOpen, closeAdvancedSearchModal } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={closeAdvancedSearchModal}
        closeModal={closeAdvancedSearchModal}
        style={customStyles}
        contentLabel="movie-modal"
        ariaHideApp={false}
      >
        <AdvancedSearchFormContainer />
      </ReactModal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.advancedSearchModalIsOpen,
  }
};

export default connect(
  mapStateToProps,
  { closeAdvancedSearchModal }
)(AdvancedSearchModalContainer);
