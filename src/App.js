// deps
import React, { useState } from 'react';
import {
  ApplicabilityTitle,
  ApplicabilitySection,
  Header,
  IntroductionConcept,
  IntroductionSection,
  ArchitectureSection,
} from './styles';
import HeaderTitle from './components/HeaderTitle';
import TimelineSection from './components/Timeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { swiperContents } from './constants';
import EmbeddedLogo from './assets/embedded-logo.png';
import EmbeddedIllustration from './assets/embedded-illustration.png';
import FeaturesButton from './components/FeaturesButton';
import { BsSearch } from 'react-icons/bs';
import Modal from './components/BaseModal';
import ArchitectureTabs from './components/ArchitectureTabs';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  function openFeaturesModal() {
    setShowFeaturesModal(true);
  }
  return (
    <>
      <Modal isOpen={showModal} handleCloseModal={() => setShowModal(false)}>
        <button>Close Modal</button>
      </Modal>
      <Modal
        title='Características'
        isOpen={showFeaturesModal}
        handleCloseModal={() => setShowFeaturesModal(false)}
      >
        <strong>
          Algumas das principais características que permeiam os sistemas
          embarcados são que estes interagem com o ambiente que os cerca:
          <br/>&#8226; Geralmente são móveis;
          <br/>&#8226; Consumo energético deste deve ser mínimo e bem
          balanceado;
          <br/>&#8226; A disponibilidade de memória é muito limitada então um
          código fonte bem otimizado e enxuto é necessário;
          <br/>&#8226; Recursos de hardware
          são bem limitados com a frequência do clock e tensão sendo as menores
          possíveis;
          <br/>&#8226; O uso eficiente do hardware pode vir a reduzir o custo final
          do sistema embarcado.
        </strong>
      </Modal>
      <section>
        <Header>
          <img
            src={EmbeddedLogo}
            alt='Embedded System Logo'
            style={{
              width: 200,
              height: 200,
            }}
          />
          <HeaderTitle />
        </Header>
        <IntroductionSection>
          <IntroductionConcept>
            <h1>Introdução</h1>Diferindo dos computadores que possuem sistemas
            operacionais e executam softwares dos mais variados os sistemas
            eletrônicos embarcados são sistemas de processamento de informações
            que estão embutidos em sistemas maiores e que normalmente não
            possuem uma interface direta com o usuário (computação invisível), o
            hardware e software normalmente são integrados e seu projeto visa o
            desempenho de uma função específica.
          </IntroductionConcept>
          <img src={EmbeddedIllustration} alt='Embedded Illustration' />
          <FeaturesButton onOpenFeaturesModal={openFeaturesModal}>
            Características <BsSearch size='24' />
          </FeaturesButton>
        </IntroductionSection>
        <TimelineSection />
        <ArchitectureSection>
          <ArchitectureTabs />
        </ArchitectureSection>
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
            style={{ height: 200, width: '100%' }}
          >
            {swiperContents.map((swiper, index) => {
              return (
                <SwiperSlide key={index}>
                  <h1>{swiper.title}</h1>
                  <h4>{swiper.subtitle}</h4>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ApplicabilitySection>
      </section>
    </>
  );
}
