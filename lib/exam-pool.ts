import { exame3Questions } from "./exame-3-questions"
import { exame22Questions } from "./exame-22-questions"
import type { Question } from "./types"

// Pool of all available exams
export const examPool = [
  { id: "exam-3", name: "Exame 3", questions: exame3Questions },
  { id: "exam-22", name: "Exame 22", questions: exame22Questions },
]

// Get a random exam from the pool
export function getRandomExam() {
  const randomIndex = Math.floor(Math.random() * examPool.length)
  return examPool[randomIndex]
}

// Get random questions from a specific exam (shuffled)
export function getShuffledExamQuestions(examId: string, count = 25): Question[] {
  const exam = examPool.find((e) => e.id === examId)
  if (!exam) return []

  const shuffled = [...exam.questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Get completely random questions from all available exams
export function getRandomQuestionsFromAllExams(count = 25): Question[] {
  const allQuestions = examPool.flatMap((exam) => exam.questions)
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
