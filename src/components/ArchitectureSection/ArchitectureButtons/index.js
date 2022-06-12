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
  const [modalTitle, setModalTitle] = useState('');

  function showModalOpc(opc) {
    setShowOpcModal(true);
    let modalInfo = componentsBtn.find(
      (componentsBtn) => componentsBtn.opc === opc
    );
    setModalDescription([modalInfo.text, modalInfo.text2]);
    setModalTitle(modalInfo.opc);
  }

  return (
    <>
      <Modal
        isOpen={showOpcModal}
        handleCloseModal={() => setShowOpcModal(false)}
        title={modalTitle}
        height={'35%'}
      >
        <div style={{textAlign:'justify'}}>
          &emsp;&emsp;&emsp;{modalDescription[0]}
          <br />
          <br />
          &emsp;&emsp;&emsp;{modalDescription[1]}
        </div>
      </Modal>

      <OscillatorButton onClick={showModalOpc.bind(this, 'Oscilador')}>
        Oscilador Externo
      </OscillatorButton>
      <SFRButton onClick={showModalOpc.bind(this, 'SFR')}>SFR</SFRButton>

      <InternalOscillatorButton onClick={showModalOpc.bind(this, 'Oscilador')}>
        Oscilador Interno
      </InternalOscillatorButton>
      <SPIButton onClick={showModalOpc.bind(this, 'SPI I²C')}>
        SPI I²C
      </SPIButton>
      <USARTButton onClick={showModalOpc.bind(this, 'USART')}>
        USART
      </USARTButton>

      <T0Button onClick={showModalOpc.bind(this, 'Temporizadores')}>
        T0
      </T0Button>
      <T1Button onClick={showModalOpc.bind(this, 'Temporizadores')}>
        T1
      </T1Button>
      <T2Button onClick={showModalOpc.bind(this, 'Temporizadores')}>
        T2
      </T2Button>

      <ADConverter onClick={showModalOpc.bind(this, 'Conversor A/D')}>
        Conversor A/D
      </ADConverter>
      <Vref onClick={showModalOpc.bind(this, 'VREF')}>Vref</Vref>
      <PortButtonContainer>
        <PortButton onClick={showModalOpc.bind(this, 'Portas')}>
          Porta A
        </PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'Portas')}>
          Porta B
        </PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'Portas')}>
          Porta C
        </PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'Portas')}>
          Porta D
        </PortButton>
        <PortButton onClick={showModalOpc.bind(this, 'Portas')}>
          Porta E
        </PortButton>
      </PortButtonContainer>
      <CCPButton onClick={showModalOpc.bind(this, 'CPP')}>CPP</CCPButton>
      <PWMButton onClick={showModalOpc.bind(this, 'PWM')}>PWM</PWMButton>

      <CPUButton onClick={showModalOpc.bind(this, 'CPU')}>CPU</CPUButton>

      <RAMButton onClick={showModalOpc.bind(this, 'Memória RAM')}>
        Memória RAM
      </RAMButton>

      <ProgramMemoryButton onClick={showModalOpc.bind(this, 'Memória de Programa')}>
        Memória de Programa
      </ProgramMemoryButton>

      <EEPROMButton onClick={showModalOpc.bind(this, 'Memória de Dados')}>
        EEPROM
      </EEPROMButton>

      <InterruputsButton onClick={showModalOpc.bind(this, 'Watchdog')}>
        Watchdog
      </InterruputsButton>

      <ResetButton onClick={showModalOpc.bind(this, 'Reset')}>
        Reset
      </ResetButton>

      <PowerSupplyButton onClick={showModalOpc.bind(this, 'Fonte de Energia')}>
        Fonte de Energia
        <br />
      </PowerSupplyButton>
    </>
  );
}

export default ArchitectureButtons;
