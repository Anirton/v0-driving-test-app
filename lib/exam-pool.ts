import { exame3Questions } from "./exame-3-questions"
import { exame22Questions } from "./exame-22-questions"
import type { Question } from "./types"

// Pool of all available exams
export const examPool = [
  { id: "exam-3", name: "Exame 3", questions: exame3Questions },
  { id: "exam-22", name: "Exame 22", questions: exame22Questions },
]

const USED_EXAMS_KEY = "used-exams"

function getUsedExams(): string[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(USED_EXAMS_KEY)
  return stored ? JSON.parse(stored) : []
}

function saveUsedExams(examIds: string[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(USED_EXAMS_KEY, JSON.stringify(examIds))
}

function markExamAsUsed(examId: string): void {
  const used = getUsedExams()
  if (!used.includes(examId)) {
    used.push(examId)
    saveUsedExams(used)
  }
}

function resetUsedExams(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(USED_EXAMS_KEY)
}

// Get a random exam from the pool that hasn't been used yet
export function getRandomExam() {
  const usedExams = getUsedExams()
  const availableExams = examPool.filter((exam) => !usedExams.includes(exam.id))

  if (availableExams.length === 0) {
    resetUsedExams()
    return examPool[Math.floor(Math.random() * examPool.length)]
  }

  const randomIndex = Math.floor(Math.random() * availableExams.length)
  const selectedExam = availableExams[randomIndex]

  // Mark this exam as used
  markExamAsUsed(selectedExam.id)

  return selectedExam
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get random questions from a specific exam (shuffled)
export function getShuffledExamQuestions(examId: string, count = 25): Question[] {
  const exam = examPool.find((e) => e.id === examId)
  if (!exam) return []

  const shuffled = shuffleArray(exam.questions)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Get completely random questions from all available exams
export function getRandomQuestionsFromAllExams(count = 25): Question[] {
  const allQuestions = examPool.flatMap((exam) => exam.questions)
  const shuffled = shuffleArray(allQuestions)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

export function getExamProgress() {
  const used = getUsedExams()
  const total = examPool.length
  return {
    usedCount: used.length,
    totalCount: total,
    remaining: total - used.length,
    usedExamIds: used,
  }
}
