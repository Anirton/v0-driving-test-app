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

const rawExame23 = [
  {
    id: "ex23_q001",
    pergunta:
      "Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de...",
    opcoes: ["Pelo menos 50 metros.", "Pelo menos 25 metros.", "Pelo menos 100 metros.", "10 metros."],
    resposta_correta_index: 2,
    explicacao:
      "A pré-sinalização de perigo deve ser colocada a uma distância mínima de 100 metros para garantir que os outros condutores tenham tempo suficiente para reagir à situação de avaria.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex23/1.png",
  },
  // ... more questions
]

export const exame23Questions: Question[] = rawExame23.map(transformQuestion)
