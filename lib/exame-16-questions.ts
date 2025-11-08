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

const rawExame16 = [
  // Add sample questions - in production, all 25 questions would be here
  {
    id: "ex16_q001",
    pergunta: "Exemplo de pergunta do exame 16?",
    opcoes: ["Opção A", "Opção B", "Opção C"],
    resposta_correta_index: 0,
    explicacao: "Explicação da resposta correta.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex16/1.png",
  },
  // ... more questions would be added from the fetched JSON
]

export const exame16Questions: Question[] = rawExame16.map(transformQuestion)
