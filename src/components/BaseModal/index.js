import React from 'react';
import ReactModal from 'react-modal';
import CloseButton from './CloseButton';
import { HeaderModal } from './styles';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999999
  },
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    height: '60%',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999
  },
};

export default function Modal({ title, isOpen, handleCloseModal, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={handleCloseModal}
      style={customStyles}
      appElement={document.getElementById('root')}
    >
      <HeaderModal>
        <h3 style={{ fontSize: 'bold' }}>{title}</h3>
        <CloseButton onCloseModal={handleCloseModal} />
      </HeaderModal>
      {children}
    </ReactModal>
  );
}
