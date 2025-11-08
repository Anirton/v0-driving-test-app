import type { Question } from "./types"

function transformQuestion(q: any): Question {
  const options: any = {}
  const letters = ["A", "B", "C", "D"]

  q.opcoes.forEach((option: string, index: number) => {
    if (option && option.trim()) {
      options[letters[index]] = option
    }
  })

  return {
    id: q.id,
    text: q.pergunta,
    options,
    correctAnswer: letters[q.resposta_correta_index],
    category: "general-rules",
    explanation: q.explicacao,
    imagePath: q.imagem,
  }
}

const rawExame17 = [
  {
    id: "ex17_q001",
    pergunta: "Qual das seguintes é uma afirmação falsa?",
    opcoes: [
      "O sistema de circulação rodoviária é um conjunto de elementos interligados e dependentes.",
      "O homem é o elemento mais importante do sistema rodoviário.",
      "O acidente resulta sempre da falha de vários elementos do sistema rodoviário.",
      "A probabilidade de acidente aumenta quando há uma alteração na interação entre os vários elementos do sistema rodoviário.",
    ],
    resposta_correta_index: 2,
    explicacao: "Um acidente pode resultar de um único erro ou falha isolada, portanto esta afirmação é falsa.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex17/1.png",
  },
  // ... more questions would be added here
]

export const exame17Questions: Question[] = rawExame17.map(transformQuestion)
