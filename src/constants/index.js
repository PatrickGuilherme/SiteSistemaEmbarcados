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
    opc: 'Fonte de Energia',
    text: 'Os microcontroladores conseguem trabalhar em uma faixa de tensão de alguns volts, sendo comum os microcontroladores de 8 bits com 3,3V ou 5V.',
    text2: ''
  },
  {
    opc: 'Reset',
    text: 'O reset ou Master Clear é um pino que é utilizado nos microcontroladores para retornar estes a um estado conhecido, ou seja, retornar seu funcionamento ao normal em que seus registros têm valores iniciais pré-definidos.',
    text2: 'O reset é usado quando o microcontrolador não se comporta da maneira esperada, mas também pode ser utilizado quando ocorre uma interrupção por parte de outro dispositivo conectado ao microcontrolador. As formas de gerar um reset são várias, podendo ser quando se liga a alimentação, a nível de instrução logica e quando o watchdog é acionado.'
  },
  {
    opc: 'CPU',
    text: 'A Unidade central de processamento é o “cérebro” do microcontrolador que é responsável por executar operações lógicas e matemáticas programadas, sendo dividida em unidade de controle (busca a instrução da memória e decodifica-a), unidade lógica aritmética (realiza operações aritméticas e booleanas) e registradores (memória rápida para guardar informações de controle, resultados intermediários).',
    text2: ''
  },
  {
    opc: 'Watchdog',
    text: 'É um circuito interno de monitoramento (denominado “cão de guarda”). Este circuito consiste em um temporizador, que intencionalmente provoca um RESET no microcontrolador.',
    text2: 'A ideia deste circuito é que, se o programa, por algum motivo, ficar travado, o Watchdog agirá e tirará o microcontrolador da situação de erro.'
  },
  {
    opc: 'Memória RAM',
    text: 'Memória de dados usada por um programa, durante a sua execução. Na RAM, são guardados todos os resultados intermediários ou dados temporários durante a execução do programa e que não são necessários serem mantidos após a sua execução.',
    text2: 'A memória RAM necessita de alimentação elétrica para manter a integridade de seus dados. É por este motivo, pertencente ao grupo de memórias voláteis.'
  },
  {
    opc: 'Memória de Dados',
    text: 'A memória EEPROM é usada para guardar dados importantes ou alguns parâmetros de processamento. A característica mais importante desta memória é não perder o seu conteúdo quando a fonte de energia é desligada. Sem alimentação, estes dados permanecem no microcontrolador durante mais de 40 anos (microcontrolador PIC16F84)',
    text2: 'Sendo uma evolução da EPROM, a EEPROM tem a capacidade de apagar e reescrever seus dados via eletricidade, não sendo necessário removê-la do circuito para ser limpa ou reprogramada.'
  },
  {
    opc: 'Memória de Programa',
    text: 'A memória de programa é implementada usando tecnologia FLASH, o que torna possível programar o microcontrolador muitas vezes antes de este ser instalado num dispositivo, e, mesmo depois da sua instalação, pode-se alterar o programa e parâmetros contidos. O tamanho da memória de programa é de 1024 endereços de palavras de 14 bits, destes, os endereços zero e quatro estão reservados respectivamente para o reset e para o vetor de interrupção.',
    text2: ''
  },
  {
    opc: 'Oscilador',
    text: 'Um oscilador é um circuito que converte a corrente contínua em alternada constituído por um elemento passivo responsável pela frequência de oscilação e um elemento ativo que fornece a energia necessária para compensar o amortecimento do sinal, devido à resistência elétrica do circuito.',
    text2: 'Na eletrônica os microcontroladores necessitam de uma fonte de clock, esta fonte é o circuito do oscilador, este pode ser [INTERNO] sendo calibrado pelo fabricante, sendo mais otimizado no consumo de energia e com precisão razoável, ou o oscilador pode ser [EXTERNO] aplicado em casos onde precisão é fundamental e necessita-se de altos valores de frequência de clock.'
  },
  {
    opc: 'Temporizadores',
    text: 'Os microcontroladores possuem unidades de temporização. Estes podem ser utilizados pelo programa para criar contadores e temporizadores que rodam no hardware e deixam o programa livre para executar outras tarefas em paralelo.',
    text2: 'A unidade de temporização gera sinais em intervalos de tempos regulares e com isso pode-se criar os contatores e temporizadores.'
  },
  {
    opc: 'Portas',
    text: 'As portas são um grupo de pinos existentes no microcontrolador representando a conexão física da CPU com o mundo exterior, podendo ser empregados para observar ou comandar dispositivos ou componentes. Por exemplo, acionar LEDs, controlar motores, ler botões ou ler determinados sensores.',
    text2: 'As portas podem ser acionadas simultaneamente, pode-se colocar uma combinação de zeros e uns ou ler um estado existente, estes pinos podem ser definidos como entrada ou saída, de acordo com as necessidades do projeto a partir da escrita no seu registro chamado TRIS sendo que cada pino tem uma letra associada.'
  },
  {
    opc:'Conversor A/D',
    text: 'Como os sinais dos periféricos são diferentes daqueles que o microcontrolador pode processar (zero e um), eles devem ser convertidos num formato que possa ser compreendido pelo microcontrolador. Este é o conversor Analógico para Digital que desempenha o papel de converter o sinal analógico de entrada para um sinal digital, o que permite o seu processamento no domínio digital como um vetor de n bits.',
    text2: ''
  },
  {
    opc: 'PWM',
    text: 'O PWM (Pulse-width modulation ou modulação por largura de pulso) é utilizada para permitir o controle da energia fornecida a equipamentos elétricos, como servomotores e dispositivos de iluminação. Também pode ser usada para codificar mensagens para transmissão.',
    text2: ''
  },
  {
    opc: 'USART',
    text: 'USART (Transmissor e Receptor Universal Síncrono e Assíncrono) é um módulo de comunicação (periférico) que é utilizada para transmitir e receber dados de forma serial (envia e recebe toda a informação sequencialmente), de maneira síncrona ou assíncrona. Conectando dispositivos como bluetooth, GPS, RFID entre outros.',
    text2: 'A comunicação síncrona descreve que cada bit ou conjunto de bits enviados depende de um pulso de clock e requer um fio específico para o clock, já a comunicação assíncrona não requer o sinal de clock e requer que os dispositivos em comunicação tenham a mesma taxa de recepção/envio. Tanto na assíncrona como síncrona existe um fio que é usado para transmitir dados e outro para receber dados.'
  },
  {
    opc: 'SPI I²C',
    text: 'O Serial Peripheral Interface ou SPI é um protocolo de comunicação serial síncrona que fornece comunicação full-duplex (dispositivo pode transmitir e receber dados ao mesmo tempo) em velocidades muito altas. Este é um protocolo que tem o comando centralizado em um dispositivo mestre que inicia a comunicação, enviando comandos e definindo a taxa de comunicação (mestre-escravo).',
    text2: 'O I²C é um barramento de comunicação que utiliza geralmente dois canais de transmissão, um para transmitir e receber dados e outro para sincronização dos mesmos, sendo um tipo de comunicação síncrona, assim como a SPI. O I²C permite a comunicação entre diversos dispositivos com apenas dois fios. Sendo assim, podem existir diversos mestres ou escravos ligados no barramento.'
  },
  {
    opc: 'VREF',
    text: 'Vref é a tensão de referência pela qual o ADC(Conversor A/D) calcula os valores digitais. Em muitos ADCs (Conversores A/D) a fonte de tensão do chip pode ser usada como sua tensão de referência, mas haveria ruído nos sinais e não seria consistente ou preciso.',
    text2: ''
  },
  {
    opc: 'CPP',
    text: 'O módulo CCP é um periférico presente em microcontroladores que executa três processos, a captura, a comparação e a geração PWM. Um CPP nas funções de captura e comparação possui três blocos: um temporizador (Timer 1), um circuito lógico (captura/comparação) e registradores CCPRxH e o CCPRxL para armazenar o valor em um processo de captura ou comparação.',
    text2: 'O modo captura pode determinar a largura de um pulso, período de um sinal ou a sua frequência, o modo de comparação compara os valores de um registrador Timer 1 e os CCPRs, quando tiver uma igualdade um evento de comparação é disparado, podendo gerar, a exemplo, uma interrupção do programa. O modo de PWM é capaz de executar a modulação por largura de pulso através de comparações com o registrador Timer 2. '
  },
  {
    opc: 'SFR',
    text: 'O SFR (Special Function Registers) é um registrador "especial" que serve exatamente para guardar a configuração e o estado atual da máquina.',
    text2: ''
  }
];