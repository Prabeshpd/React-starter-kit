import * as React from 'react';
import Modal from 'react-modal';

import './modal.css';

import AddMyBeerForm from './addMyBeerForm';
import { MyBeerPayload } from '../../../../types/Beer';

Modal.setAppElement('#app');

interface InjectedProps {
  openModal: () => void;
  closeModal: () => void;
  isOpenModal: boolean;
  handleFormSubmit: (payload: MyBeerPayload) => void;
}

function ModalElement(props: InjectedProps) {
  const { closeModal, isOpenModal, handleFormSubmit } = props;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div className="reveal">
      <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <div className="ml-24 mr-24">
          <h3>Add a New Beer</h3>
          <AddMyBeerForm handleFormSubmit={handleFormSubmit} closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default ModalElement;
