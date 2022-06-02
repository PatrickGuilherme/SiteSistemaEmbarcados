import React,{useState} from 'react';
import EmbeddedArchitecture from './../../assets/embedded-architecture.png';
import ArchitectureButtons from './ArchitectureButtons';
import { Container } from './styles';

function ArchitectureTabs() {
  return <Container style={{padding: '0.3%'}}>
    <div style={{display:'flex', flexDirection: 'row', marginBottom: '1%'}}>
      <div style={{alignContent: 'flex-start'}}>
        <img src={EmbeddedArchitecture} alt='Embedded System Architecture' />
        <ArchitectureButtons />    
      </div>    
      <div style={{alignContent: 'flex-end', marginLeft: '2%'}}>
        <h1>ARQUITETURA E MICROCONTROLADORES</h1>
        <p style={{textAlign: 'justify'}}>
        Quando se analisa o desenvolvimento de sistemas embarcados, é comum que o cerne do projeto seja um microcontrolador, este possui um processador dedicado a uma finalidade específica. Em um microcontrolador geralmente as entradas são fornecidas ao sistema e estas geram as  as saídas.  Neste contexto as entradas e saídas representam elementos como: sensores, atuadores, dispositivos de comunicação, dispositivos de interface gráfica, entre outros.
        </p>
        <div style={{width: '100%', backgroundColor: '#D3D3D3', padding: '2%'}}>
          <a style={{textDecoration: 'none'}} href="https://www.youtube.com/watch?v=lQVF-u-Onlo&feature=emb_title">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#DC143C" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>
            <strong>Microcontroladores vs microprocessadores</strong>
          </a>
        </div>
      </div>    
    </div>
  </Container>;
}

export default ArchitectureTabs;
