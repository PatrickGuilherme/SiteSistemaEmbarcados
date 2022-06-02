import imagem1961 from '../assets/timeline/1961.jpg'
import imagem1970 from '../assets/timeline/1970.jpg'
import imagem1980 from '../assets/timeline/1980.jpg'
import imagem1990 from '../assets/timeline/1990.jpg'
import imagemBiometria from '../assets/aplicacao/biometria.jpg'
import imagemCarroremoto from '../assets/aplicacao/carroremoto.jpg'
import imagemcomputadorbordo from '../assets/aplicacao/computadorbordo.jpg'
import imagemcomunicacao from '../assets/aplicacao/comunicacao.jpg'
import imagemeletrodomesticos from '../assets/aplicacao/eletrodomesticos.jpg'
import imagemgames from '../assets/aplicacao/games.png'
import imagemmedico from '../assets/aplicacao/medico.jpg'
import imagemmisseis from '../assets/aplicacao/misseis.jpg'
import imagemrobotica from '../assets/aplicacao/robotica.png'
import imagemIA from '../assets/mercado/ia.png'
import imagemTec from '../assets/mercado/im1.jpg'
import imagemProf from '../assets/mercado/prof.png'

export const timelines = [
  {
    year: '1961',
    color: '#000000',
    title: 'Minuteman míssil balístico intercontinental - USA',
    description: 'O primeiro sistema de computação embarcada data de 1961 desenvolvido para o Minuteman míssil balístico intercontinental da Força Aérea dos EUA. Na sua construção foram utilizados transistores discretos e portas lógicas.',
    caminho: imagem1961
  },


  { year: '1970', color: '#00ffd3', title: 'Air Data Computer Central 1970', 
    description: 'Foi primeiro sistema embarcado baseado em microprocessador, incorporado ao avião F-14 Tomcat Lançado em 1970, este sistema embarcado lidou com q electrónica a bordo dos aviões, tratamento de vôo, e cálculo do balanço de configuração de asa do F-14, além de fornecerem informações sobre a velocidade do cockpit do ar e altitude.' 
    ,caminho: imagem1970
  },

  { year: '1980', color: '#ff8600', title: 'Sistemas on a Chip 1980', description: 'Sistemas embarcados tomou no mercado comercial na década de 1980, devido em grande parte à integração (sistemas-on-a-chip). Estes combinam um microprocessador, RAM , controladores de entrada /saída e quaisquer outros sistemas de controles relacionados com a função em um pacote de circuito integrado.',
  caminho: imagem1980
},


  { year: '1990', color: '#ff0000', title: '1990 em diante', description: 'Movendo-se em direção a celulares e computadores de mão multiuso. Um aspecto chave que mudou é que os processadores de 32 bits maduras e ferramentas de desenvolvimento mais fáceis de usar, têm aumentado o poder computacional disponível tremendamente , enquanto que muitas das restrições de energia elétrica caíram com modernas técnicas de fabricação de CPU.',
  caminho: imagem1990

},
];

export const swiperContents = [
  {
    title: 'Eletrodomésticos',
    subtitle:
      'Ar condicionado, cafeteira elétrica, micro-ondas, geladeira, máquina de lavar.',
    img: imagemeletrodomesticos,
  },
  {
    title: 'Aparelhos de comunicação',
    subtitle:
      'Equipamentos de rede como switch e roteador, telefones, Periféricos de computadores.',
    img: imagemcomunicacao,
  },
  {
    title: 'Equipamentos de Entretenimento',
    subtitle:
      'TVs e players de mídia, console de games, aparelhos de reprodução de imagens e som.',
    img: imagemgames,
  },
  {
    title: 'Equipamentos médicos',
    subtitle: 'Sistemas de suporte à vida, cadeira odontológica.',
    img: imagemmedico,
  },
  {
    title: 'Sistemas de armamentos militares',
    subtitle: 'Sistemas de lançamento de misseis, veículos militares.',
    img: imagemmisseis,
  },
  {
    title: 'Dispositivos de vendas/atendimento',
    subtitle:
      'Biometria, leitor de código de barras, caixa de autoatendimento ATM.',
    img: imagemBiometria,
  },
  {
    title: 'Brinquedos',
    subtitle: 'Bonecos que falam e se movem, carros de controle remoto.',
    img: imagemCarroremoto,
  },
  {
    title: 'Automotivo',
    subtitle:
      'Computadores de bordo automotivos, freio ABS, interface de vídeo e voz.',
    img: imagemcomputadorbordo,
  },
  {
    title: 'Industrial',
    subtitle: 'Sistemas de controle, robótica.',
    img: imagemrobotica,
  },
];

export const mercado = [
  {
    description: 'Linguagens como C, C++, Python, Rust e até mesmo JavaScript estão sendo usadas em aplicações mais atuais, chamando assim a atenção de desenvolvedores de outras áreas (com o destaque em Web).',
    color:'#FFFFFF',
    img: imagemTec,
  },
  {
    description: 'No ramo da TI, a área que está crescendo muito é a área de Inteligência Artificial, no qual tem link com IoT, tecnologias as quais possuem um poder muito grande em soluções de problemas e melhora na qualidade de vida ou de ensino, reconhecimento facial, detecção de enchentes, sistema de monitoramento cardíaco, entre outros.',
    color:'#FFFFFF',
    img: imagemIA,
  },
  {
    description: 'Fóruns de tecnologias abordam o questionamento de esses avanços pode ocasionar o aumento do número de desempregados por conta da “substituição” do humano pela máquina, mas na verdade, vai está provocando os mesmo a se profissionalizar e se preparem para o futuro',
    color:'#000',
    img: imagemProf,
  },
];

export const componentsBtn = [
  {
    opc: 'Alimentacao',
    text: 'Os microcontroladores conseguem trabalhar em uma faixa de tensão de alguns volts, sendo comum os microcontroladores de 8 bits com 3,3V ou 5V.',
    text2: ''
  },
  {
    opc: 'Reset',
    text: 'O microcontrolador possui um pino que serve para reiniciá-lo a partir de um sinal de tensão que é aplicado no pino. Reiniciar nada mais é do que fazer o programa interno do microcontrolador voltar ao início. Este pino pode receber o nome de RESET ou de Master Clear (MCLR).',
    text2: ''
  },
  {
    opc: 'Cpu',
    text: 'A Unidade central de processamento é o “cérebro” do microcontrolador que é responsável por executar operações lógicas e matemáticas programadas, sendo dividida em unidade de controle (busca a instrução da memória e decodifica-a), unidade lógica aritmética (realiza operações aritméticas e booleanas) e registradores (memória rápida para guardar informações de controle, resultados intermediários).',
    text2: ''
  },
  {
    opc: 'Watchdog',
    text: 'É um circuito interno de monitoramento (tanto é que chama “cão de guarda”). Este circuito consiste em um temporizador, que intencionalmente provoca um RESET no microcontrolador. Portanto, para que o microcontrolador funcione corretamente, o programa deve ficar reiniciando constantemente o Watchdog para evitar o reinicio.',
    text2: 'A ideia deste circuito é que, se o programa, por algum motivo, ficar travado, o Watchdog agirá e tirará o microcontrolador da situação de erro. O uso do Watchdog não é obrigatório e, em muitos casos, ele é desabilitado por padrão.'
  },
  {
    opc: 'MemoriaRAM',
    text: 'A memória RAM é uma memória de leitura e escrita, isto é, que pode ser gravada com um determinado valor e este valor pode ser posteriormente lido. Além disso, podemos acessar qualquer registrador desejado aleatoriamente para ler ou escrever uma palavra.',
    text2: 'A memória RAM comum necessita de alimentação elétrica para manter a integridade de seus dados. É por este motivo, pertencente ao grupo de memórias voláteis.'
  },
  {
    opc: 'MemoriaEEPROM',
    text: 'A EEPROM (Electrically Erasable Programmable Read-Only Memory) é uma memoria destinada apenas a leitura como seu nome sugere, sendo uma evolução do EPROM a EEPROM tem a capacidade de apagar e reescrever seus dados via eletricidade, não sendo necessário remover ela do circuito para ser limpa ou reprogramada. Ela nem sempre está presente nos microcontroladores.',
    text2: ''
  },
  {
    opc: 'MemoriaPrograma',
    text: 'Uma memória ROM (Read Only Memory) é um tipo de memória no qual podemos ler, mas não escrever, tendo os conteúdos fixos e inalterados. Existem circuitos de ROM que permitem que o usuário estabeleça as informações que serão armazenadas, ao invés do fabricante. Estas memórias são chamadas de memórias PROM (Memórias de leitura programáveis). Normalmente a gravação é feita através da queima de elos fusíveis que determinam se a posição de memória conterá “um” ou “zero”.',
    text2: ''
  },
  {
    opc: 'Oscilador',
    text: 'Os microcontroladores necessitam de uma fonte de clock para que possam processar informações, sendo a velocidade de processamento proporcional à frequência fornecida pela fonte de clock. Neste contexto há os osciladores, circuito que gera o clock do microcontrolador podendo ser interno (normalmente um circuito RC) ou externo (normalmente um circuito com cristal).',
    text2: ''
  },
  {
    opc: 'T0T1T2',
    text: 'Os microcontroladores possuem circuitos de timers. Estes timers podem ser utilizados pelo programa para criar contadores e temporizadores que rodam no hardware e deixam o programa livre para executar outras tarefas em paralelo.',
    text2: ''
  },
  {
    opc: 'PortasABCDE',
    text: 'O GPIO é um periférico responsável por controlar os pinos de entrada e saída digital do microcontrolador. Isto significa que ele é capaz de: definir se um pino é saída ou entrada, Se o pino for saída, então ele pode controlar o estado do pino (0 ou 1), se o pino for entrada, ele pode ler o estado do pino (0 ou 1) entre outros detalhes.',
    text2: 'Com estas configurações, é possível fazer o microcontrolador ler e controlar ‘elementos’ que estão externos ao seu circuito. Por exemplo, o microcontrolador pode acionar LEDs, controlar motores (com a ajuda de um circuito de potência), ler botões ou ler determinados sensores.'
  },
  {
    opc:'conversorA/D',
    text: 'Para realizar a interface com o sistema exterior (processo), os controladores estão dotados de sistemas de aquisição e conversão de sinais, um deles é o conversor A/D (Conversor Analógico para Digital) este desempenha o papel de converter o sinal analógico de entrada para um sinal digital, o que permite o seu processamento no domínio digital como um vetor de n bits.',
    text2: ''
  },
  {
    opc: 'PWM',
    text: 'A sigla PWM (Pulse Width Modulation) significa Modulação por Largura de Pulso. A técnica PWM consegue substituir outras técnicas de controle de potência, como a modulação por frequência (FM). A técnica PWM também pode ser utilizada no controle de velocidade dos motores, controle de luminosidade, controle de servo motores e em outras aplicações.',
    text2: ''
  },
  {
    opc: 'USART',
    text: 'O USART é um módulo de comunicação que utiliza sinais de dados e relógio para seu funcionamento sendo empregado para transmitir e receber dados de forma serial, de maneira síncrona ou assíncrona atuando como um receptor e transmissor universal.',
    text2: ''
  },
  {
    opc: 'SPII2C',
    text: 'Serial Peripheral Interface ou SPI é um protocolo de comunicação serial síncrona que fornece comunicação full-duplex em velocidades muito altas. Este é um protocolo do tipo mestre-escravo que fornece uma interface simples e de baixo custo entre um microcontrolador e seus periféricos.',
    text2: 'O protocolo I2C descreve o funcionamento de um barramento de comunicação serial que utiliza apenas dois fios, inventado pela Philips no início da década de 90, este protocolo é muito utilizado para conectar periféricos de baixa velocidade a placas-mãe, microcontroladores e afins.'
  },
  {
    opc: 'VREF',
    text: '',
    text2: ''
  },
  {
    opc: 'CPP1CPP2',
    text: '',
    text2: ''
  },
  {
    opc: 'SFR',
    text: '',
    text2: ''
  }
];