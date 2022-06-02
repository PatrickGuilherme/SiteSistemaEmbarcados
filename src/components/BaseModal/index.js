import React from 'react';
import ReactModal from 'react-modal';
import CloseButton from './CloseButton';
import { HeaderModal } from './styles';

export default function Modal({
  title,
  isOpen,
  handleCloseModal,
  height,
  children,
}) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .15)',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999
    },
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: 200,
      maxWidth: 'fit-content',
      maxHeight: '85vh',
      padding: 30,
      marginTop: '-5vh',
      backgroundColor: 'white',
      borderRadius: 27,

      '&:focus': {
        outline: 'none',
      },
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={handleCloseModal}
      style={customStyles}
      appElement={document.getElementById('root')}
      className='modal'
    >
      <HeaderModal>
        <h3 style={{ fontSize: 30 }}>{title}</h3>
        <CloseButton onCloseModal={handleCloseModal} />
      </HeaderModal>
      {children}
    </ReactModal>
  );
}
