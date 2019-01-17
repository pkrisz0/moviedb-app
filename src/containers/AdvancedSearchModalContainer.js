import connect from 'react-redux/es/connect/connect';
import React from 'react';
import ReactModal from 'react-modal';
import { closeAdvancedSearchModal } from '../actions/modal';
import AdvancedSearchFormContainer from './AdvancedSearchFormContainer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '25px',
  },
};

class AdvancedSearchModalContainer extends React.Component {
  render() {
    const { isOpen, closeSearchModal } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={closeSearchModal}
        closeModal={closeSearchModal}
        style={customStyles}
        contentLabel="movie-modal"
        ariaHideApp={false}
      >
        <AdvancedSearchFormContainer />
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.modal.advancedSearchModalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  closeSearchModal: () => {
    dispatch(closeAdvancedSearchModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvancedSearchModalContainer);
