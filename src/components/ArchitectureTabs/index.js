import React from 'react';
import EmbeddedArchitecture from './../../assets/embedded-architecture.png';
import ArchitectureButtons from './ArchitectureButtons';
import { Container } from './styles';
import YoutubeIcon from '../../assets/youtube-icon.png';

function ArchitectureTabs() {
  return (
    <Container>
      <div>
        <img
          src={EmbeddedArchitecture}
          alt='Embedded System Architecture'
          style={{
            pointerEvents: 'none',
            borderRadius: 27,
            boxShadow:
              '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          }}
        />
        <ArchitectureButtons />
      </div>
      <div style={{ marginLeft: '2%' }}>
        <h1 style={{ fontSize: 30 }}>ARQUITETURA E MICROCONTROLADORES</h1>
        <p
          style={{
            textAlign: 'justify',
            marginTop: 20,
            marginBottom: 20,
            fontSize: 18,
          }}
        >
          Quando se analisa o desenvolvimento de sistemas embarcados, é comum
          que o cerne do projeto seja um microcontrolador, este possui um
          processador dedicado a uma finalidade específica. Em um
          microcontrolador geralmente as entradas são fornecidas ao sistema e
          estas geram as as saídas. Neste contexto as entradas e saídas
          representam elementos como: sensores, atuadores, dispositivos de
          comunicação, dispositivos de interface gráfica, entre outros.
        </p>
        <a
          href='https://www.youtube.com/watch?v=lQVF-u-Onlo&feature=emb_title'
          style={{
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#D3D3D3',
            padding: 20,
          }}
        >
          <img src={YoutubeIcon} alt='YouTube Icon' style={{ width: 40 }} />
          <strong>Microcontroladores vs microprocessadores</strong>
        </a>
      </div>
    </Container>
  );
}

export default ArchitectureTabs;
