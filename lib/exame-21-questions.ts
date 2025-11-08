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

const rawExame21 = [
  {
    id: "ex21_q001",
    pergunta: "O que indica o sinal?",
    opcoes: [
      "A presença de cancela motorizada ao centro.",
      "A presença de entroncamento oblíquo à esquerda.",
      "A presença de ponte móvel.",
      "A presença de via em mau estado.",
    ],
    resposta_correta_index: 2,
    explicacao:
      "O sinal de perigo com a imagem de uma ponte basculante indica a aproximação de uma ponte móvel, onde o trânsito pode ser temporariamente interrompido para permitir a passagem de embarcações.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex21/1.png",
  },
  // ... more questions
]

export const exame21Questions: Question[] = rawExame21.map(transformQuestion)
