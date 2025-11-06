"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { QuestionCard } from "@/components/question-card"
import { QuizNavigation } from "@/components/quiz-navigation"
import { QuizProgress } from "@/components/quiz-progress"
import { Button } from "@/components/ui/button"
import { getUserProgress, toggleMarkedQuestion, addWrongQuestion, removeWrongQuestion } from "@/lib/storage"
import type { Question } from "@/lib/types"

interface PracticeCategoryClientProps {
  questions: Question[]
}

export default function PracticeCategoryClient({ questions }: PracticeCategoryClientProps) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | "C" | "D" | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

  const progress = getUserProgress()
  const currentQuestion = questions[currentQuestionIndex]
  const isMarked = progress.markedQuestions.includes(currentQuestion.id)

  const handleSelectAnswer = (answer: "A" | "B" | "C" | "D") => {
    if (showFeedback) return
    setSelectedAnswer(answer)
  }

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return

    setShowFeedback(true)
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex))

    // Track wrong answers
    if (selectedAnswer !== currentQuestion.correctAnswer) {
      addWrongQuestion(currentQuestion.id)
    } else {
      removeWrongQuestion(currentQuestion.id)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const handleToggleMark = () => {
    toggleMarkedQuestion(currentQuestion.id)
    window.location.reload()
  }

  return (
    <div className="space-y-6">
      <QuizProgress
        currentQuestion={currentQuestionIndex}
        totalQuestions={questions.length}
        answeredCount={answeredQuestions.size}
        showTimer={false}
      />

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
        showFeedback={showFeedback}
        isMarked={isMarked}
        onToggleMark={handleToggleMark}
        disabled={showFeedback}
      />

      {!showFeedback && selectedAnswer && (
        <div className="flex justify-center">
          <Button onClick={handleCheckAnswer} size="lg" className="px-8">
            Verificar Resposta
          </Button>
        </div>
      )}

      {showFeedback && (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg ${
              selectedAnswer === currentQuestion.correctAnswer
                ? "bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900"
                : "bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900"
            }`}
          >
            <p
              className={`text-center font-semibold ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? "text-emerald-900 dark:text-emerald-200"
                  : "text-rose-900 dark:text-rose-200"
              }`}
            >
              {selectedAnswer === currentQuestion.correctAnswer ? "Correto!" : "Incorreto"}
            </p>
          </div>

          <QuizNavigation
            currentQuestion={currentQuestionIndex}
            totalQuestions={questions.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoNext={true}
            showFinish={false}
          />
        </div>
      )}
    </div>
  )
}
