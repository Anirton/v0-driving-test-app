"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QuestionCard } from "@/components/question-card"
import { QuizNavigation } from "@/components/quiz-navigation"
import { QuizProgress } from "@/components/quiz-progress"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toggleMarkedQuestion, getUserProgress } from "@/lib/storage"
import type { Question } from "@/lib/types"

interface ReviewQuestionsClientProps {
  questionIds: number[]
  title: string
  description: string
  emptyMessage: string
}

export default function ReviewQuestionsClient({
  questionIds,
  title,
  description,
  emptyMessage,
}: ReviewQuestionsClientProps) {
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [markedQuestions, setMarkedQuestions] = useState<number[]>([])

  const isWrongQuestions = title.includes("Erradas")

  useEffect(() => {
    const fetchQuestions = async () => {
      const progress = getUserProgress()
      const questionIds = isWrongQuestions ? progress.wrongQuestions : progress.markedQuestions
      setMarkedQuestions(progress.markedQuestions)

      if (questionIds.length === 0) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch("/api/questions/by-ids", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: questionIds }),
        })

        if (response.ok) {
          const data = await response.json()
          setQuestions(data)
        }
      } catch (error) {
        console.error("Error fetching questions:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [isWrongQuestions])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Carregando...</p>
          </Card>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">{emptyMessage}</p>
            <Button onClick={() => router.push("/review")}>Voltar</Button>
          </Card>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const isMarked = markedQuestions.includes(currentQuestion.id)

  const handleToggleMark = () => {
    toggleMarkedQuestion(currentQuestion.id)
    const progress = getUserProgress()
    setMarkedQuestions(progress.markedQuestions)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => router.push("/review")} className="gap-2">
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
          Voltar
        </Button>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <QuizProgress
          currentQuestion={currentQuestionIndex}
          totalQuestions={questions.length}
          answeredCount={questions.length}
          showTimer={false}
        />

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={currentQuestion.correctAnswer}
          onSelectAnswer={() => {}}
          showFeedback={true}
          isMarked={isMarked}
          onToggleMark={handleToggleMark}
          disabled={true}
        />

        <QuizNavigation
          currentQuestion={currentQuestionIndex}
          totalQuestions={questions.length}
          onPrevious={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
          onNext={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
          canGoNext={true}
          showFinish={false}
        />
      </div>
    </div>
  )
}
