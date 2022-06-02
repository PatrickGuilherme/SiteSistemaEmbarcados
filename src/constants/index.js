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
  },
  {
    opc: 'Reset',
    text: 'O microcontrolador possui um pino que serve para reiniciá-lo a partir de um sinal de tensão que é aplicado no pino. Reiniciar nada mais é do que fazer o programa interno do microcontrolador voltar ao início. Este pino pode receber o nome de RESET ou de Master Clear (MCLR).',
  },
  {
    opc: 'Cpu',
    text: 'É o “cérebro” do microcontrolador que processa as instruções contidas no progrma, sendo divididotento uma unidade de controle, unidade executa conjuntos de instruções.'
  },
  {
    opc: 'Watchdog',
    text: 'É um circuito interno de monitoramento (cão de guarda). Este circuito consiste em um temporizador, que intencionalmente provoca um RESET no microcontrolador. A ideia deste circuito é que, se o programa, por algum motivo, ficar travado, o Watchdog agirá e tirará o microcontrolador da situação de erro.'
  },
  {
    opc: 'MemoriaRAM',
    text: 'Nos microcontroladores é comum encontrar estes 3 tipos de memória uma delas é a  memória de dados, sendo a RAM e registradores da CPU.'
  },
  {
    opc: 'MemoriaEEPROM',
    text: 'Memória para o programa armazenar qualquer tipo de dado que precise ser retido. Ex: dados de configurações do programa.'
  },
  {
    opc: 'MemoriaPrograma',
    text: 'É comum de ser empregada a memória flash. Costuma ser consideravelmente maior (em armazenamento) que a memória RAM.'
  },
  {
    opc: 'Oscilador',
    text: 'O oscilador é o circuito que gera o clock do microcontrolador. Ele pode ser interno (normalmente um circuito RC) ou externo (normalmente um circuito com cristal).'
  },
  {
    opc: 'GPIO',
    text: 'É o periférico dos pinos de propósito geral (entradas e saídas digitais), sendo o mais comum dos microcontroladores. Este periférico é o responsável pela CPU conseguir, por exemplo, acionar um LED ligado à um pino do microcontrolador'
  },
  {
    opc: 'Timens',
    text: 'Os microcontroladores possuem circuitos de timers. Estes timers podem ser utilizados pelo programa para criar contadores e temporizadores que rodam no hardware e deixam o programa livre para executar outras tarefas em paralelo.'
  },
];