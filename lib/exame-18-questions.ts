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

const rawExame18 = [
  {
    id: "ex18_q001",
    pergunta: "Os sistemas de segurança passiva dos veículos têm a função de:",
    opcoes: [
      "Evitar ou reduzir as lesões que podem ocorrer no caso de sofrer um acidente.",
      "Evitar os acidentes.",
      "Transmitir uma sensação de segurança quando se circula a velocidades elevadas.",
      "Proporcionar maior conforto aos ocupantes do veículo.",
    ],
    resposta_correta_index: 0,
    explicacao:
      "Os sistemas de segurança passiva, como cintos de segurança, airbags e encostos de cabeça, têm como função minimizar as consequências de um acidente, reduzindo o risco de lesões nos ocupantes.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex18/1.png",
  },
  // ... more questions
]

export const exame18Questions: Question[] = rawExame18.map(transformQuestion)
