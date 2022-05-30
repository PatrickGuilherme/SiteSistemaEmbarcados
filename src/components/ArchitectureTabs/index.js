import React from 'react';
import EmbeddedArchitecture from './../../assets/embedded-architecture.png';
import ArchitectureButtons from './ArchitectureButtons';
import { Container } from './styles';

function ArchitectureTabs() {
  return <Container>
    <img src={EmbeddedArchitecture} alt='Embedded System Architecture' />
    <ArchitectureButtons />
  </Container>;
}

export default ArchitectureTabs;
