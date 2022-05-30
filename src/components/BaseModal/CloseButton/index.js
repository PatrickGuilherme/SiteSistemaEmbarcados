import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Button } from './styles';

function CloseButton({ onCloseModal }) {
  return (
    <Button onClick={onCloseModal}>
      <IoClose size={16} />
    </Button>
  );
}

export default CloseButton;
