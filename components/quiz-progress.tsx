"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface QuizProgressProps {
  currentQuestion: number
  totalQuestions: number
  answeredCount: number
  timeRemaining?: number
  showTimer?: boolean
}

export function QuizProgress({
  currentQuestion,
  totalQuestions,
  answeredCount,
  timeRemaining,
  showTimer = false,
}: QuizProgressProps) {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100
  const answeredPercentage = (answeredCount / totalQuestions) * 100

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium">
          Progresso: {currentQuestion + 1}/{totalQuestions}
        </div>
        {showTimer && timeRemaining !== undefined && (
          <div
            className={cn(
              "text-sm font-semibold tabular-nums",
              timeRemaining < 300 && "text-rose-600",
              timeRemaining >= 300 && "text-muted-foreground",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-1"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {formatTime(timeRemaining)}
          </div>
        )}
      </div>

      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        {answeredCount} de {totalQuestions} questões respondidas
      </div>
    </Card>
  )
}

export default QuizProgress
