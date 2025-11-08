import type { Question } from "./types"

// Exam 22 questions from the provided JSON data
export const exame22Questions: Question[] = [
  {
    id: "ex22_q001",
    text: "O que indica o sinal?",
    options: {
      A: "A existência de uma berma baixa à esquerda.",
      B: "A existência de um terreno falso à direita.",
      C: "A existência de uma berma baixa à direita.",
    } as any,
    correctAnswer: "C",
    category: "traffic-signs",
    explanation:
      "O sinal de perigo com um desnível à direita alerta o condutor para a existência de uma berma baixa ou queda lateral à direita da faixa de rodagem.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/1.png",
  },
  {
    id: "ex22_q002",
    text: "Pode transportar uma criança neste motociclo?",
    options: {
      A: "Sim, se tem pelo menos 3 anos e leva o capacete devidamente ajustado e apertado.",
      B: "Sim, num assento adicional.",
      C: "Sim, se tem pelo menos 7 anos e leva o capacete devidamente ajustado e apertado.",
      D: "Não, nunca.",
    },
    correctAnswer: "C",
    category: "general-rules",
    explanation:
      "A lei permite o transporte de crianças a partir dos 7 anos em motociclos, desde que usem capacete devidamente ajustado e o condutor seja maior de idade.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/2.png",
  },
  {
    id: "ex22_q005",
    text: "A capacidade de o condutor prever e antecipar aumenta:",
    options: {
      A: "Com a categoria do veículo.",
      B: "Com a experiência.",
      C: "Com a velocidade do veículo.",
      D: "Com a idade do condutor.",
    },
    correctAnswer: "B",
    category: "general-rules",
    explanation:
      "A experiência permite ao condutor reconhecer padrões de risco e reagir de forma mais adequada, melhorando a capacidade de previsão e antecipação de situações perigosas.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/5.png",
  },
  {
    id: "ex22_q006",
    text: "O controlo dinâmico do veículo é uma das tarefas da condução e é...",
    options: {
      A: "Efectuado através da aceleração e travagem do veículo.",
      B: "Efectuado através do sistema de direcção.",
      C: "Efectuado através da definição da sua velocidade e da sua trajectória.",
    } as any,
    correctAnswer: "C",
    category: "general-rules",
    explanation:
      "O controlo dinâmico consiste em gerir a velocidade e a trajectória do veículo de forma a garantir estabilidade, segurança e adaptação às condições da via.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/6.png",
  },
  {
    id: "ex22_q007",
    text: "O significado deste sinal é:",
    options: {
      A: "Entrocamento transversal à esquerda.",
      B: "Entrocamento colateral à esquerda.",
      C: "Entrocamento em forma de Y ou bifurcação.",
      D: "Estrada convergente.",
    },
    correctAnswer: "C",
    category: "traffic-signs",
    explanation:
      "O sinal adverte o condutor sobre a aproximação de um entroncamento em forma de Y, indicando a necessidade de atenção redobrada na escolha da trajectória.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/7.png",
  },
  {
    id: "ex22_q008",
    text: "Sempre que o veículo esteja parado ou estacionado do lado esquerdo da faixa de rodagem...",
    options: {
      A: "Os passageiros devem entrar e sair pelo lado direito do veículo.",
      B: "Os passageiros devem entrar e sair pelo lado esquerdo do veículo.",
      C: "Os passageiros não podem sair do veículo.",
      D: "O condutor deve entrar e sair pelo lado esquerdo do veículo.",
    },
    correctAnswer: "B",
    category: "general-rules",
    explanation:
      "Quando o veículo se encontra parado ou estacionado do lado esquerdo da faixa de rodagem, a entrada e saída devem ser feitas pelo lado junto ao passeio ou berma, ou seja, o lado esquerdo, para evitar o risco de atropelamento.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/8.png",
  },
  {
    id: "ex22_q009",
    text: "Que deve fazer perante um ferido que tenha uma forte hemorragia na perna?",
    options: {
      A: "Pôr pomada na ferida.",
      B: "Deve sempre fazer um torniquete na perna lesionada.",
      C: "Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.",
    } as any,
    correctAnswer: "C",
    category: "safety",
    explanation:
      "Em caso de hemorragia forte, deve-se cobrir a ferida com um pano limpo e comprimir, levantando o membro afetado para reduzir a perda de sangue. O torniquete só deve ser feito em último caso, quando a hemorragia não pode ser controlada de outra forma.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/9.png",
  },
  {
    id: "ex22_q010",
    text: "O que indica o sinal?",
    options: {
      A: "Ponte estreita.",
      B: "Passagem estreita.",
      C: "Entroncamentos sucessivos.",
    } as any,
    correctAnswer: "A",
    category: "traffic-signs",
    explanation:
      "Este sinal de perigo indica uma ponte estreita, alertando o condutor para reduzir a velocidade e circular com precaução, pois a largura da via é reduzida nessa zona.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/10.png",
  },
  {
    id: "ex22_q011",
    text: "O condutor deve ter em atenção que, se tem problemas de sono...",
    options: {
      A: "Não se encontra em perfeitas condições para conduzir.",
      B: "É aconselhável tomar bastantes substâncias estimulantes para ficar acordado.",
      C: "Deve dormir mais horas para conduzir.",
      D: "O seu estado não tem influência na condução.",
    },
    correctAnswer: "A",
    category: "safety",
    explanation:
      "Um condutor com problemas de sono apresenta fadiga e diminuição da capacidade de reação, o que compromete a segurança rodoviária. Assim, não se encontra em boas condições para conduzir.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/11.png",
  },
  {
    id: "ex22_q012",
    text: "O que indica o sinal?",
    options: {
      A: "Trânsito proibido a peões, animais e veículos automóveis.",
      B: "Trânsito proibido a animais e veículos não automóveis.",
      C: "Trânsito proibido a peões, animais e veículos não automóveis.",
    } as any,
    correctAnswer: "C",
    category: "traffic-signs",
    explanation:
      "Este sinal indica que é proibida a circulação de peões, animais e veículos não automóveis, restringindo a via apenas a veículos motorizados.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/12.png",
  },
  {
    id: "ex22_q013",
    text: "Os acidentes devido ao sono acontecem...",
    options: {
      A: "Somente quando o condutor fica a dormir profundamente.",
      B: "Sempre de noite.",
      C: "Também antes do condutor adormecer.",
      D: "Quando o condutor é inexperiente.",
    },
    correctAnswer: "C",
    category: "safety",
    explanation:
      "A sonolência reduz a atenção e os reflexos do condutor, podendo causar acidentes mesmo antes de o condutor adormecer completamente.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/13.png",
  },
  {
    id: "ex22_q014",
    text: "O condutor pode utilizar aparelhos radiotelefónicos durante a marcha do veículo?",
    options: {
      A: "Sim, já que não prejudica o exercício da condução com segurança.",
      B: "Sim, mas apenas para mensagens de texto.",
      C: "Apenas se for dotado de um auricular ou de microfone com sistema de alta voz, cuja utilização não implique um manuseamento continuado.",
      D: "Não, é sempre proibido ao condutor utilizar aparelhos radiotelefónicos.",
    },
    correctAnswer: "C",
    category: "general-rules",
    explanation:
      "A lei permite o uso de dispositivos de comunicação apenas se o condutor não precisar de os manusear continuamente, de modo a não desviar a atenção da condução.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/14.png",
  },
  {
    id: "ex22_q015",
    text: "A definição de inversão do sentido da marcha é:",
    options: {
      A: "Manobra através da qual o condutor coloca o veículo em sentido oposto, na mesma direção.",
      B: "Manobra através da qual o condutor coloca o veículo no mesmo sentido.",
      C: "Manobra através da qual o condutor coloca o veículo no mesmo sentido, em direção oposta.",
      D: "Manobra através da qual o condutor coloca o veículo no mesmo sentido e na mesma direção.",
    },
    correctAnswer: "A",
    category: "general-rules",
    explanation:
      "A inversão do sentido da marcha é a manobra que permite ao condutor colocar o veículo a circular no sentido oposto ao que seguia, na mesma via.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/15.png",
  },
  {
    id: "ex22_q016",
    text: "O que indica o sinal complementar de perigo?",
    options: {
      A: "Baia direcional para a direita.",
      B: "Baia indicadora de direção à direita.",
      C: "Baia direcional para a esquerda.",
    } as any,
    correctAnswer: "B",
    category: "traffic-signs",
    explanation:
      "O sinal complementar de perigo neste caso informa sobre a existência de uma baia indicadora de direção à direita, orientando o condutor a ajustar a trajetória com segurança.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/16.png",
  },
  {
    id: "ex22_q017",
    text: "O que significa responsabilidade moral?",
    options: {
      A: "Responder perante o Tribunal.",
      B: "Prestar contas perante os membros da sociedade.",
      C: "Responder pelos seus próprios actos.",
    } as any,
    correctAnswer: "C",
    category: "general-rules",
    explanation:
      "A responsabilidade moral implica assumir as consequências éticas das próprias ações, respondendo por elas perante a consciência e os princípios morais.",
  },
  {
    id: "ex22_q018",
    text: "O sinal indica:",
    options: {
      A: "Estacionamento limitado.",
      B: "Estacionamento proibido.",
      C: "Estacionamento condicionado.",
    } as any,
    correctAnswer: "B",
    category: "traffic-signs",
    explanation:
      "O sinal circular azul com faixa vermelha transversal indica proibição de estacionamento, alertando o condutor para não deixar o veículo parado nesse local.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/18.png",
  },
  {
    id: "ex22_q019",
    text: "Que veículos podem conduzir as pessoas que só possuam a carta de condução da categoria B?",
    options: {
      A: "Todos.",
      B: "Automóveis ligeiros.",
      C: "Automóveis pesados de mercadorias ou de passageiros.",
      D: "Motociclos com ou sem carro.",
    },
    correctAnswer: "B",
    category: "general-rules",
    explanation:
      "A carta de condução da categoria B autoriza a condução de automóveis ligeiros de passageiros ou de mercadorias, até ao limite de peso e lugares definido por lei.",
  },
  {
    id: "ex22_q020",
    text: "O que deve fazer o condutor para prevenir os acidentes?",
    options: {
      A: "Conduzir alcoolizado.",
      B: "Ignorar os sinais de trânsito.",
      C: "Praticar uma condução defensiva.",
      D: "Aumentar a velocidade para chegar mais rápido.",
    },
    correctAnswer: "C",
    category: "safety",
    explanation:
      "A condução defensiva envolve antecipar situações perigosas e reagir com prudência para evitar acidentes.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/20.png",
  },
  {
    id: "ex22_q021",
    text: "A carga mal acondicionada pode contribuir para:",
    options: {
      A: "Reduzir a visibilidade do condutor.",
      B: "Aumentar o equilíbrio do veículo.",
      C: "Reduzir o tempo de reação.",
      D: "Aumentar a estabilidade facilitando a sua condução.",
    },
    correctAnswer: "A",
    category: "general-rules",
    explanation:
      "A carga mal acondicionada pode bloquear a visão do condutor ou até causar acidentes, prejudicando a segurança.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/21.png",
  },
  {
    id: "ex22_q022",
    text: "A entrada e saída de passageiros deve fazer-se:",
    options: {
      A: "Pelo lado direito ou esquerdo indistintamente.",
      B: "Pelo lado permitido para a paragem.",
      C: "Sempre pelo lado esquerdo.",
      D: "Sempre o condutor pela direita e os restantes ocupantes pela esquerda.",
    },
    correctAnswer: "B",
    category: "general-rules",
    explanation:
      "A entrada e saída de passageiros deve ser feita sempre no lado mais seguro, ou seja, onde o veículo está estacionado, preferencialmente o lado permitido para a paragem.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/22.png",
  },
  {
    id: "ex22_q023",
    text: "As baixas temperaturas que normalmente acompanham a existência de nevoeiro, que podem provocar?",
    options: {
      A: "O embaciamento dos vasos e consequente aumento da visibilidade para o exterior.",
      B: "Ser mais fácil limpar os vidros já que estes estão molhados.",
      C: "O embaciamento dos vidros e consequente diminuição da visibilidade para o exterior.",
    } as any,
    correctAnswer: "C",
    category: "safety",
    explanation:
      "O nevoeiro combinado com baixas temperaturas pode causar embaciamento nos vidros do veículo, prejudicando a visibilidade e tornando a condução mais perigosa.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/23.png",
  },
  {
    id: "ex22_q024",
    text: "Os jovens, têm mais possibilidades de ter acidentes rodoviários?",
    options: {
      A: "Sim, normalmente fazem uma avaliação incorreta dos riscos.",
      B: "Sim, devido à falta de reflexos.",
      C: "Sim, a sua visão é mais reduzida.",
      D: "Não.",
    },
    correctAnswer: "A",
    category: "safety",
    explanation:
      "Os jovens condutores tendem a subestimar os riscos e a avaliação de perigos, o que os torna mais propensos a se envolverem em acidentes.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/24.png",
  },
  {
    id: "ex22_q025",
    text: "O significado deste sinal é:",
    options: {
      A: "Sinalização de itinerário (interseção de nível).",
      B: "Pré-sinalização de itinerário (interseção de nível).",
      C: "Sinalização de via interrompida.",
      D: "Sinalização de itinerário obrigatório.",
    },
    correctAnswer: "B",
    category: "traffic-signs",
    explanation:
      "Este sinal indica a pré-sinalização de um itinerário para uma interseção de nível, alertando o condutor para o próximo cruzamento.",
    imagePath: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex22/25.png",
  },
]
