// deps
import React, { useState } from 'react';
import {
  ApplicabilityTitle,
  ApplicabilitySection,
  Header,
  IntroductionConcept,
  IntroductionSection,
} from './styles';

import HeaderTitle from './components/HeaderTitle';
import TimelineSection from './components/Timeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { swiperContents, mercado } from './constants';
import EmbeddedLogo from './assets/embedded-logo.png';
import EmbeddedIllustration from './assets/embedded-illustration.png';
import FeaturesButton from './components/FeaturesButton';
import { BsSearch } from 'react-icons/bs';
import Modal from './components/BaseModal';
import ArchitectureSection from './components/ArchitectureSection';

export default function App() {
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  function openFeaturesModal() {
    setShowFeaturesModal(true);
  }

  return (
    <>
      <Modal
        title='Características'
        isOpen={showFeaturesModal}
        handleCloseModal={() => setShowFeaturesModal(false)}
      >
        <p>
          Algumas das principais características que permeiam os sistemas
          embarcados são que estes interagem com o ambiente que os cerca:
        </p>

        <ul style={{ listStyle: 'none', padding: '2%' }}>
          <li style={{ paddingBottom: '1%' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#FF62B0'
              class='bi bi-phone-fill'
              viewBox='0 0 16 16'
            >
              <path d='M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z' />
            </svg>
            <span>Geralmente são móveis</span>
          </li>

          <li style={{ paddingBottom: '1%' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#9A03FE'
              class='bi bi-battery-charging'
              viewBox='0 0 16 16'
            >
              <path d='M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z' />
              <path d='M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z' />
              <path d='M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z' />
              <path d='M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z' />
            </svg>
            <span>
              Consumo energético deste deve ser mínimo e bem balanceado
            </span>
          </li>

          <li style={{ paddingBottom: '1%' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#03EBA6'
              class='bi bi-sd-card-fill'
              viewBox='0 0 16 16'
            >
              <path d='M12.5 0H5.914a1.5 1.5 0 0 0-1.06.44L2.439 2.853A1.5 1.5 0 0 0 2 3.914V14.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0Zm-7 2.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2.75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0Zm1.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z' />
            </svg>
            <span>
              A disponibilidade de memória é muito limitada então um código
              fonte bem otimizado e enxuto é necessário
            </span>
          </li>

          <li style={{ paddingBottom: '1%' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#2DC800'
              class='bi bi-motherboard-fill'
              viewBox='0 0 16 16'
            >
              <path d='M5 7h3V4H5v3Z' />
              <path d='M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z' />
            </svg>
            <span>
              Recursos de hardware são bem limitados com a frequência do clock e
              tensão sendo as menores possíveis
            </span>
          </li>

          <li style={{ paddingBottom: '1%' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='#6A6AFF'
              class='bi bi-cpu-fill'
              viewBox='0 0 16 16'
            >
              <path d='M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z' />
              <path d='M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z' />
            </svg>
            <span>
              O uso eficiente do hardware pode vir a reduzir o custo final do
              sistema embarcado
            </span>
          </li>
        </ul>
      </Modal>

      <section>
        <Header>
          <img
            src={EmbeddedLogo}
            alt='Embedded System Logo'
            style={{
              width: 200,
              height: 200,
              pointerEvents: 'none',
            }}
          />
          <HeaderTitle />
        </Header>

        <IntroductionSection>
          <IntroductionConcept>
            <h1 style={{fontSize: 30}}>Introdução</h1>
            <p style={{ textAlign: 'justify', fontSize:18, marginTop: 20}}>
            &emsp;&emsp;&emsp;Diferindo dos computadores que possuem sistemas operacionais e
              executam softwares dos mais variados os sistemas eletrônicos
              embarcados são sistemas de processamento de informações que estão
              embutidos em sistemas maiores e que normalmente não possuem uma
              interface direta com o usuário (computação invisível), o hardware
              e software normalmente são integrados e seu projeto visa o
              desempenho de uma função específica.
            </p>
          </IntroductionConcept>
          <img
            src={EmbeddedIllustration}
            alt='Embedded Illustration'
            style={{ pointerEvents: 'none' }}
          />
          <FeaturesButton onOpenFeaturesModal={openFeaturesModal}>
            Características <BsSearch size='24' />
          </FeaturesButton>
        </IntroductionSection>

        <TimelineSection />

        <ArchitectureSection />

        <ApplicabilitySection>
          <ApplicabilityTitle>Aplicações</ApplicabilityTitle>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            style={{ height: '100%', width: '100%' }}
          >
            {swiperContents.map((swiper, index) => {
              return (
                <SwiperSlide key={index}>
                  <div style={{ textAlign: 'center', padding: 30 }}>
                    <h1>{swiper.title}</h1>
                    <h4>{swiper.subtitle}</h4>
                    <img
                      src={swiper.img}
                      alt={swiper.title}
                      style={{ pointerEvents: 'none', marginTop: 20, borderRadius: 27, boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ApplicabilitySection>
        <ApplicabilitySection>
          <div style={{ marginTop: '5%' }}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              style={{ height: '100%', width: '100%' }}
            >
              {mercado.map((mercado, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        background: 'url(' + mercado.img + ')',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 300,
                        width: '100%',
                      }}
                    >
                      <p
                        style={{
                          color: mercado.color,
                          fontSize: '150%',
                          fontWeight: 'bold',
                          pointerEvents: 'none',
                          width: '80%',
                        }}
                      >
                        {mercado.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </ApplicabilitySection>
      </section>
    </>
  );
}
