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

const rawExame20 = [
  {
    id: "ex20_q001",
    pergunta: "Nas vias públicas, os peões devem transitar...",
    opcoes: [
      "Pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas.",
      "Pela faixa de rodagem, mesmo que existam bermas.",
      "Sempre pelas bermas, mesmo que existam pistas especiais destinadas a eles.",
      "Pelos passeios, se empurram um veículo de tração manual.",
    ],
    resposta_correta_index: 0,
    explicacao:
      "Os peões devem utilizar as zonas próprias para sua circulação, como passeios e passadeiras. Na ausência destas, devem usar a berma com cautela.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex20/1.png",
  },
  // ... more questions
]

export const exame20Questions: Question[] = rawExame20.map(transformQuestion)
