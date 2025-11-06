"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuizNavigationProps {
  currentQuestion: number
  totalQuestions: number
  onPrevious: () => void
  onNext: () => void
  onFinish?: () => void
  canGoNext: boolean
  showFinish?: boolean
}

export function QuizNavigation({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onFinish,
  canGoNext,
  showFinish = false,
}: QuizNavigationProps) {
  const isFirstQuestion = currentQuestion === 0
  const isLastQuestion = currentQuestion === totalQuestions - 1

  return (
    <div className="flex items-center justify-between gap-4">
      <Button variant="outline" onClick={onPrevious} disabled={isFirstQuestion} className="gap-2 bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Anterior
      </Button>

      <div className="flex-1 flex justify-center">
        <div className="flex gap-1.5 flex-wrap justify-center max-w-md">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === currentQuestion ? "bg-primary w-6" : "bg-muted-foreground/30",
              )}
            />
          ))}
        </div>
      </div>

      {showFinish && isLastQuestion ? (
        <Button onClick={onFinish} disabled={!canGoNext} className="gap-2">
          Finalizar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      ) : (
        <Button onClick={onNext} disabled={!canGoNext || isLastQuestion} className="gap-2">
          Próxima
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      )}
    </div>
  )
}

export default QuizNavigation
