"use client"

import type { Question } from "@/lib/types"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedAnswer: "A" | "B" | "C" | "D" | null
  onSelectAnswer: (answer: "A" | "B" | "C" | "D") => void
  showFeedback?: boolean
  isMarked?: boolean
  onToggleMark?: () => void
  disabled?: boolean
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showFeedback = false,
  isMarked = false,
  onToggleMark,
  disabled = false,
}: QuestionCardProps) {
  const options: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"]

  return (
    <Card className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-medium text-muted-foreground">
          Questão {questionNumber} de {totalQuestions}
        </div>
        {onToggleMark && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleMark}
            className={cn("gap-2", isMarked && "text-amber-600")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={isMarked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
            {isMarked ? "Marcada" : "Marcar"}
          </Button>
        )}
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-balance">{question.text}</h2>

      {question.imagePath && (
        <div className="mb-6 rounded-lg overflow-hidden bg-muted">
          <img
            src={question.imagePath || "/placeholder.svg"}
            alt="Imagem da questão"
            className="w-full h-auto max-h-64 object-contain"
          />
        </div>
      )}

      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrect = question.correctAnswer === option
          const showCorrect = showFeedback && isCorrect
          const showIncorrect = showFeedback && isSelected && !isCorrect

          return (
            <button
              key={option}
              onClick={() => !disabled && onSelectAnswer(option)}
              disabled={disabled}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all",
                "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
                isSelected && !showFeedback && "border-primary bg-primary/5",
                !isSelected && !showFeedback && "border-border bg-card",
                showCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
                showIncorrect && "border-rose-500 bg-rose-50 dark:bg-rose-950/30",
                disabled && "cursor-not-allowed opacity-60",
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm",
                    isSelected && !showFeedback && "border-primary bg-primary text-primary-foreground",
                    !isSelected && !showFeedback && "border-muted-foreground/30",
                    showCorrect && "border-emerald-600 bg-emerald-600 text-white",
                    showIncorrect && "border-rose-600 bg-rose-600 text-white",
                  )}
                >
                  {showCorrect ? "✓" : showIncorrect ? "✗" : option}
                </div>
                <div className="flex-1 pt-1">{question.options[option]}</div>
              </div>
            </button>
          )
        })}
      </div>

      {showFeedback && (
        <div className="mt-6 p-4 rounded-lg bg-muted">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Explicação
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </Card>
  )
}

export default QuestionCard
