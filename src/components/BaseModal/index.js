import { findByLabelText } from '@testing-library/react';
import React from 'react';
import ReactModal from 'react-modal';
import CloseButton from './CloseButton';
import { HeaderModal } from './styles';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
};

export default function Modal({ title, isOpen, handleCloseModal, children }) {
  return (
    <ReactModal 
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={handleCloseModal}
      style={customStyles}>
      <HeaderModal >
        <h3 style={{fontSize:'bold'}}>{title}</h3>
        <CloseButton onCloseModal={handleCloseModal} />
      </HeaderModal>
      {children}
    </ReactModal>
  );
}
