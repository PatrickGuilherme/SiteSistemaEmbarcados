import React, { useState } from 'react';
import { timelines } from '../../constants';
import { Container, YearBox, YearText } from './styles';
import { IoLocationSharp } from 'react-icons/io5';
import Modal from '../BaseModal';

export default function Timeline() {
  const [showYearModal, setShowYearModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  function showModal(year) {
    setShowYearModal(true);
    let modalInfo = timelines.find((timeline) => timeline.year === year);
    setModalTitle(modalInfo.title);
    setModalDescription(modalInfo.description);
  }
  return (
    <Container>
      <Modal
        title={modalTitle}
        isOpen={showYearModal}
        handleCloseModal={() => setShowYearModal(false)}
      >
        {modalDescription}
      </Modal>
      {timelines.map((timeline) => (
        <YearBox
          key={timeline.year}
          onClick={showModal.bind(this, timeline.year)}
        >
          <YearText color={timeline.color}>
            <IoLocationSharp color={timeline.color} />
            {timeline.year}
          </YearText>
          <div style={{ height: 15, backgroundColor: timeline.color }}></div>
        </YearBox>
      ))}
    </Container>
  );
}
