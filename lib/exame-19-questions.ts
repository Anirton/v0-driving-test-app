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

const rawExame19 = [
  {
    id: "ex19_q001",
    pergunta: "O que indica o sinal?",
    opcoes: [
      "Desvio da fila de trânsito para a direita.",
      "Desvio da fila de trânsito para a esquerda.",
      "Desvio e aumento de filas de trânsito para a esquerda.",
    ],
    resposta_correta_index: 1,
    explicacao:
      "O sinal indica que os veículos devem desviar-se para a esquerda devido a um obstáculo ou alteração temporária no trânsito.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex19/1.png",
  },
  // ... more questions
]

export const exame19Questions: Question[] = rawExame19.map(transformQuestion)
