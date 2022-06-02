import React, { useState } from 'react';
import { componentsBtn } from '../../../constants';
import Modal from '../../BaseModal';

import {
  ADConverter,
  InternalOscillatorButton,
  OscillatorButton,
  PortButtonContainer,
  PortButton,
  SPIButton,
  T0Button,
  T1Button,
  T2Button,
  USARTButton,
  Vref,
  CCPButton,
  PWMButton,
  CPUButton,
  InterruputsButton,
  WDTButton,
  SFRButton,
  RAMButton,
  ProgramMemoryButton,
  EEPROMButton,
  ResetButton,
  PowerSupplyButton,
} from '../styles';

function ArchitectureButtons() {
  const [showOpcModal, setShowOpcModal] = useState(false);
  const [modalDescription, setModalDescription] = useState('');

  function showModalOpc(opc) {
    setShowOpcModal(true);
    let modalInfo = componentsBtn.find((componentsBtn) => componentsBtn.opc === opc);
    setModalDescription(modalInfo.text);
  }

  return (
    <>

      <Modal
       isOpen={showOpcModal}
        handleCloseModal={() => setShowOpcModal(false)}>
        <div>
          {modalDescription}
        </div>
      </Modal>

      <OscillatorButton onClick={showModalOpc.bind(this, 'Oscilador')}>
      Oscilador 0 - 20MHz</OscillatorButton>
      <SFRButton>SFR</SFRButton>

      <InternalOscillatorButton>Oscilador Interno</InternalOscillatorButton>
      <SPIButton>SPI I²C</SPIButton>
      <USARTButton>USART</USARTButton>


      <T0Button onClick={showModalOpc.bind(this, 'Timens')}>
        T0
      </T0Button>
      <T1Button onClick={showModalOpc.bind(this, 'Timens')}>
        T1
      </T1Button>
      <T2Button onClick={showModalOpc.bind(this, 'Timens')}>
        T2
      </T2Button>
      

      <ADConverter>Conversor A/D</ADConverter>
      <Vref>Vref</Vref>
      <PortButtonContainer>
        <PortButton>Porta A</PortButton>
        <PortButton>Porta B</PortButton>
        <PortButton>Porta C</PortButton>
        <PortButton>Porta D</PortButton>
        <PortButton>Porta E</PortButton>
      </PortButtonContainer>
      <CCPButton>CPP1, CPP2</CCPButton>
      <PWMButton>PWM</PWMButton>
      
      <CPUButton onClick={showModalOpc.bind(this, 'Cpu')}>
        CPU
      </CPUButton>

      <RAMButton onClick={showModalOpc.bind(this, 'MemoriaRAM')}>
        RAM
      </RAMButton>

      <ProgramMemoryButton onClick={showModalOpc.bind(this, 'MemoriaPrograma')}>
        Memória Programável
      </ProgramMemoryButton>
      
      <EEPROMButton onClick={showModalOpc.bind(this, 'MemoriaEEPROM')}>
        EEPROM
      </EEPROMButton>
      
      <InterruputsButton onClick={showModalOpc.bind(this, 'Watchdog')}>
        Watchdog
      </InterruputsButton>
      
      <ResetButton onClick={showModalOpc.bind(this, 'Reset')}>
        RESETAR
      </ResetButton>

      <PowerSupplyButton onClick={showModalOpc.bind(this, 'Alimentacao')}>
        FONTE DE ENERGIA
        <br />2 - 5.5V
      </PowerSupplyButton>
    </>
  );
}

export default ArchitectureButtons;
