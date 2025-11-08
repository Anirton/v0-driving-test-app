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

const rawExame25 = [
  {
    id: "ex25_q001",
    pergunta: "O condutor determina qual é a resposta motora a executar, em que processo da tarefa da condução?",
    opcoes: ["Decisão.", "Antecipação.", "Previsão.", "Recolha."],
    resposta_correta_index: 0,
    explicacao:
      "A fase de decisão na tarefa da condução é quando o condutor escolhe a resposta motora adequada após recolher e processar as informações do ambiente.",
    imagem: "https://raw.githubusercontent.com/nhamusssua/exames-conducao/main/im/ex25/1.png",
  },
  // ... more questions
]

export const exame25Questions: Question[] = rawExame25.map(transformQuestion)
