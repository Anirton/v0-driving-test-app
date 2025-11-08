import type { Question } from "./types"
import { exame16Questions } from "./exame-16-questions"
import { exame17Questions } from "./exame-17-questions"
import { exame18Questions } from "./exame-18-questions"
import { exame19Questions } from "./exame-19-questions"
import { exame20Questions } from "./exame-20-questions"
import { exame21Questions } from "./exame-21-questions"
import { exame22Questions } from "./exame-22-questions"
import { exame23Questions } from "./exame-23-questions"
import { exame24Questions } from "./exame-24-questions"
import { exame25Questions } from "./exame-25-questions"

const COMPLETED_EXAMS_KEY = "completed-exams"

export interface Exam {
  id: string
  number: number
  questions: Question[]
}

export const allExams: Exam[] = [
  { id: "exame_16", number: 16, questions: exame16Questions },
  { id: "exame_17", number: 17, questions: exame17Questions },
  { id: "exame_18", number: 18, questions: exame18Questions },
  { id: "exame_19", number: 19, questions: exame19Questions },
  { id: "exame_20", number: 20, questions: exame20Questions },
  { id: "exame_21", number: 21, questions: exame21Questions },
  { id: "exame_22", number: 22, questions: exame22Questions },
  { id: "exame_23", number: 23, questions: exame23Questions },
  { id: "exame_24", number: 24, questions: exame24Questions },
  { id: "exame_25", number: 25, questions: exame25Questions },
]

export function getCompletedExams(): string[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(COMPLETED_EXAMS_KEY)
  return stored ? JSON.parse(stored) : []
}

export function markExamAsCompleted(examId: string): void {
  if (typeof window === "undefined") return
  const completed = getCompletedExams()
  if (!completed.includes(examId)) {
    completed.push(examId)
    localStorage.setItem(COMPLETED_EXAMS_KEY, JSON.stringify(completed))
  }
}

export function resetCompletedExams(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(COMPLETED_EXAMS_KEY)
}

export function getRandomExam(): Exam {
  const completed = getCompletedExams()
  const availableExams = allExams.filter((exam) => !completed.includes(exam.id))

  // Se todos os exames foram completados, reinicia a lista
  if (availableExams.length === 0) {
    resetCompletedExams()
    return getRandomExam()
  }

  // Seleciona um exame aleatório dos disponíveis
  const randomIndex = Math.floor(Math.random() * availableExams.length)
  const selectedExam = availableExams[randomIndex]

  // Embaralha as perguntas
  const shuffledQuestions = [...selectedExam.questions].sort(() => Math.random() - 0.5)

  return {
    ...selectedExam,
    questions: shuffledQuestions,
  }
}
