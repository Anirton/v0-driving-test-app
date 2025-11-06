export type QuestionCategory =
  | "traffic-signs"
  | "priority-rules"
  | "speed-limits"
  | "infractions"
  | "general-rules"
  | "safety"

export interface Question {
  id: string
  text: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: "A" | "B" | "C" | "D"
  category: QuestionCategory
  imagePath?: string
  explanation: string
}

export interface TestResult {
  score: number
  totalQuestions: number
  passed: boolean
  answers: {
    questionId: string
    selectedAnswer: "A" | "B" | "C" | "D" | null
    correct: boolean
  }[]
  completedAt: Date
}

export interface UserProgress {
  wrongQuestions: string[]
  markedQuestions: string[]
  completedTests: TestResult[]
}
