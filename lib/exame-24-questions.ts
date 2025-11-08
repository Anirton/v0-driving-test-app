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

const rawExame24 = [
  {
    id: "ex24_q001",
    pergunta: "O que indica a marca rodoviária branca?",
    opcoes: [
      "Indica a existência de bandas sonoras.",
      "Indica a existência de lombas.",
      "Indica a redução de filas de trânsito.",
    ],
    resposta_correta_index: 1,
    explicacao:
      "A marca rodoviária branca transversal indica a proximidade de lombas ou redutores de velocidade, alertando o condutor para reduzir a marcha.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex24/1.png",
  },
  // ... more questions
]

export const exame24Questions: Question[] = rawExame24.map(transformQuestion)
