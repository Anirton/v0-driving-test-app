import type { Question, QuestionCategory } from "./types"
import { questionsData } from "./questions-data"

export const questionsDatabase = questionsData

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questionsDatabase].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return questionsDatabase.filter((q) => q.category === category)
}

export function getQuestionById(id: string): Question | undefined {
  return questionsDatabase.find((q) => q.id === id)
}

export function getQuestionsByIds(ids: string[]): Question[] {
  return ids.map((id) => getQuestionById(id)).filter(Boolean) as Question[]
}

export const categoryNames: Record<QuestionCategory, string> = {
  "traffic-signs": "Sinais de Trânsito",
  "priority-rules": "Regras de Prioridade",
  "speed-limits": "Limites de Velocidade",
  infractions: "Infrações e Penalizações",
  "general-rules": "Regras Gerais",
  safety: "Segurança",
}
