import React, { useState } from 'react';

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


  return (
    <>
      <OscillatorButton>Oscilador 0 - 20MHz</OscillatorButton>
      <InternalOscillatorButton>Oscilador Interno</InternalOscillatorButton>
      <SPIButton>SPI I²C</SPIButton>
      <USARTButton>USART</USARTButton>
      <T0Button>T0</T0Button>
      <T1Button>T1</T1Button>
      <T2Button>T2</T2Button>
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
      <CPUButton>
        CPU
        <br />
        <p style={{ fontWeight: 'bold', fontSize: 10 }}>32 instruções</p>
      </CPUButton>
      <InterruputsButton>Interruptores</InterruputsButton>
      <SFRButton>SFR</SFRButton>
      <RAMButton>RAM (368)</RAMButton>
      <ProgramMemoryButton>Memória Programável 8K</ProgramMemoryButton>
      <EEPROMButton>EEPROM (256)</EEPROMButton>
      <ResetButton>RESETAR</ResetButton>
      <PowerSupplyButton>
        FONTE DE ENERGIA
        <br />2 - 5.5V
      </PowerSupplyButton>
    </>
  );
}

export default ArchitectureButtons;
