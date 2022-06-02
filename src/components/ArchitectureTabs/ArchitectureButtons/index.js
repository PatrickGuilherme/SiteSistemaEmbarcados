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
  const [modalDescription, setModalDescription] = useState([]);

  function showModalOpc(opc) {
    setShowOpcModal(true);
    let modalInfo = componentsBtn.find((componentsBtn) => componentsBtn.opc === opc);
    setModalDescription([modalInfo.text,modalInfo.text2]);
  }

  return (
    <>

      <Modal
       isOpen={showOpcModal}
        handleCloseModal={() => setShowOpcModal(false)}>
        <div>
          {modalDescription[0]}
          <br/>
          <br/>
          {modalDescription[1]}
        </div>
      </Modal>

      <OscillatorButton onClick={showModalOpc.bind(this, 'Oscilador')}>
      Oscilador 0 - 20MHz</OscillatorButton>
      <SFRButton onClick={showModalOpc.bind(this, 'SFR')}>SFR</SFRButton>

      <InternalOscillatorButton onClick={showModalOpc.bind(this, 'Oscilador')}>Oscilador Interno</InternalOscillatorButton>
      <SPIButton onClick={showModalOpc.bind(this, 'SPII2C')}>SPI I²C</SPIButton>
      <USARTButton>USART</USARTButton>


      <T0Button onClick={showModalOpc.bind(this, 'T0T1T2')}>
        T0
      </T0Button>
      <T1Button onClick={showModalOpc.bind(this, 'T0T1T2')}>
        T1
      </T1Button>
      <T2Button onClick={showModalOpc.bind(this, 'T0T1T2')}>
        T2
      </T2Button>
      

      <ADConverter onClick={showModalOpc.bind(this, 'conversorA/D')} >Conversor A/D</ADConverter>
      <Vref>Vref</Vref>
      <PortButtonContainer>
        <PortButton onClick={showModalOpc.bind(this, 'PortasABCDE')}>Porta A</PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'PortasABCDE')}>Porta B</PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'PortasABCDE')}>Porta C</PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'PortasABCDE')}>Porta D</PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'PortasABCDE')}>Porta E</PortButton>
      </PortButtonContainer>
      <CCPButton onClick={showModalOpc.bind(this, 'CPP1CPP2')} >CPP1, CPP2</CCPButton>
      <PWMButton onClick={showModalOpc.bind(this, 'PWM')}>PWM</PWMButton>
      
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
