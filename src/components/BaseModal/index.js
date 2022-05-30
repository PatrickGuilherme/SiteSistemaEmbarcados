import React from 'react';
import ReactModal from 'react-modal';
import CloseButton from './CloseButton';
import { HeaderModal } from './styles';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    borderRadius: 27,
  },
};

export default function Modal({ title, isOpen, handleCloseModal, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <HeaderModal>
        <h3 style={{fontSize:'bold'}}>{title}</h3>
        <CloseButton onCloseModal={handleCloseModal} />
      </HeaderModal>
      {children}
    </ReactModal>
  );
}
