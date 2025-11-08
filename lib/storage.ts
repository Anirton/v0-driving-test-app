import type { UserProgress, TestResult } from "./types"

const STORAGE_KEY = "driving-test-progress"
const FREE_TEST_ATTEMPTS_KEY = "free-test-attempts"

export function getUserProgress(): UserProgress {
  if (typeof window === "undefined") {
    return {
      wrongQuestions: [],
      markedQuestions: [],
      completedTests: [],
    }
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return {
      wrongQuestions: [],
      markedQuestions: [],
      completedTests: [],
    }
  }

  try {
    const parsed = JSON.parse(stored)
    // Convert date strings back to Date objects
    parsed.completedTests = parsed.completedTests.map((test: any) => ({
      ...test,
      completedAt: new Date(test.completedAt),
    }))
    return parsed
  } catch {
    return {
      wrongQuestions: [],
      markedQuestions: [],
      completedTests: [],
    }
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function addWrongQuestion(questionId: string): void {
  const progress = getUserProgress()
  if (!progress.wrongQuestions.includes(questionId)) {
    progress.wrongQuestions.push(questionId)
    saveUserProgress(progress)
  }
}

export function removeWrongQuestion(questionId: string): void {
  const progress = getUserProgress()
  progress.wrongQuestions = progress.wrongQuestions.filter((id) => id !== questionId)
  saveUserProgress(progress)
}

export function toggleMarkedQuestion(questionId: string): void {
  const progress = getUserProgress()
  if (progress.markedQuestions.includes(questionId)) {
    progress.markedQuestions = progress.markedQuestions.filter((id) => id !== questionId)
  } else {
    progress.markedQuestions.push(questionId)
  }
  saveUserProgress(progress)
}

export function saveTestResult(result: TestResult): void {
  const progress = getUserProgress()
  progress.completedTests.push(result)

  // Add wrong questions to the wrong questions list
  result.answers.forEach((answer) => {
    if (!answer.correct && answer.selectedAnswer !== null) {
      addWrongQuestion(answer.questionId)
    }
  })

  saveUserProgress(progress)
}

export function clearAllProgress(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}

export function getFreeTestAttempts(): number {
  if (typeof window === "undefined") return 0
  const stored = localStorage.getItem(FREE_TEST_ATTEMPTS_KEY)
  return stored ? Number.parseInt(stored, 10) : 0
}

export function incrementFreeTestAttempts(): number {
  if (typeof window === "undefined") return 0
  const current = getFreeTestAttempts()
  const newCount = current + 1
  localStorage.setItem(FREE_TEST_ATTEMPTS_KEY, newCount.toString())
  return newCount
}

export function resetFreeTestAttempts(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(FREE_TEST_ATTEMPTS_KEY)
}
