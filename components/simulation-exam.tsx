"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QuestionCard } from "@/components/question-card"
import { QuizNavigation } from "@/components/quiz-navigation"
import { QuizProgress } from "@/components/quiz-progress"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { saveTestResult, getUserProgress, toggleMarkedQuestion } from "@/lib/storage"
import type { Question, TestResult } from "@/lib/types"

const EXAM_DURATION = 30 * 60 // 30 minutes in seconds

interface SimulationExamProps {
  questions: Question[]
}

export function SimulationExam({ questions }: SimulationExamProps) {
  const router = useRouter()
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D" | null>>({})
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION)
  const [markedQuestions, setMarkedQuestions] = useState<string[]>([])

  useEffect(() => {
    if (started && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinish()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [started, timeRemaining])

  const startExam = () => {
    setStarted(true)
    setTimeRemaining(EXAM_DURATION)
    setAnswers({})
    setMarkedQuestions([])
  }

  const handleSelectAnswer = (answer: "A" | "B" | "C" | "D") => {
    const currentQuestion = questions[currentQuestionIndex]
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }))
  }

  const handleToggleMark = () => {
    const currentQuestion = questions[currentQuestionIndex]
    setMarkedQuestions((prev) =>
      prev.includes(currentQuestion.id)
        ? prev.filter((id) => id !== currentQuestion.id)
        : [...prev, currentQuestion.id],
    )
  }

  const handleFinish = () => {
    const result: TestResult = {
      score: 0,
      totalQuestions: questions.length,
      passed: false,
      answers: questions.map((q) => {
        const selectedAnswer = answers[q.id] || null
        const correct = selectedAnswer === q.correctAnswer
        return {
          questionId: q.id,
          selectedAnswer,
          correct,
        }
      }),
      completedAt: new Date(),
    }

    result.score = result.answers.filter((a) => a.correct).length
    result.passed = result.score >= 27 // 90% pass rate

    saveTestResult(result)

    // Save marked questions to user progress
    const progress = getUserProgress()
    markedQuestions.forEach((qId) => {
      if (!progress.markedQuestions.includes(qId)) {
        toggleMarkedQuestion(qId)
      }
    })

    router.push(`/results?testId=${progress.completedTests.length - 1}`)
  }

  const answeredCount = Object.values(answers).filter((a) => a !== null).length
  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] || null : null

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <Button variant="ghost" onClick={() => router.push("/")} className="mb-6 gap-2">
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

          <Card className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-2">Simulação de Exame</h1>
                <p className="text-muted-foreground">Teste os seus conhecimentos em condições reais de exame</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4 text-left">
                <h2 className="font-semibold text-lg">Instruções:</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>O exame contém 30 questões aleatórias</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tem 30 minutos para completar</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Não receberá feedback durante o exame</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Pode marcar questões para revisão</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Precisa de 27 respostas corretas (90%) para passar</span>
                  </li>
                </ul>
              </div>

              <Button onClick={startExam} size="lg" className="w-full md:w-auto px-8">
                Iniciar Simulação
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <QuizProgress
          currentQuestion={currentQuestionIndex}
          totalQuestions={questions.length}
          answeredCount={answeredCount}
          timeRemaining={timeRemaining}
          showTimer={true}
        />

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={currentAnswer}
          onSelectAnswer={handleSelectAnswer}
          isMarked={markedQuestions.includes(currentQuestion.id)}
          onToggleMark={handleToggleMark}
        />

        <QuizNavigation
          currentQuestion={currentQuestionIndex}
          totalQuestions={questions.length}
          onPrevious={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
          onNext={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
          onFinish={handleFinish}
          canGoNext={currentAnswer !== null}
          showFinish={true}
        />

        {answeredCount < questions.length && (
          <Card className="p-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <p className="text-sm text-amber-900 dark:text-amber-200 text-center">
              Ainda tem {questions.length - answeredCount} questões por responder
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
