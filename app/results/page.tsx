"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CategoryBadge } from "@/components/category-badge"
import { getUserProgress } from "@/lib/storage"
import type { TestResult, Question } from "@/lib/types"

function ResultsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const testId = searchParams.get("testId")

  const [result, setResult] = useState<TestResult | null>(null)
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([])

  useEffect(() => {
    async function loadResults() {
      if (testId !== null) {
        const progress = getUserProgress()
        const testIndex = Number.parseInt(testId)
        if (testIndex >= 0 && testIndex < progress.completedTests.length) {
          const testResult = progress.completedTests[testIndex]
          setResult(testResult)

          const wrongAnswers = testResult.answers.filter((a) => !a.correct && a.selectedAnswer !== null)
          if (wrongAnswers.length > 0) {
            const ids = wrongAnswers.map((a) => a.questionId).join(",")
            const response = await fetch(`/api/questions/by-ids?ids=${ids}`)
            const questions = await response.json()
            setWrongQuestions(questions)
          }
        }
      }
    }
    loadResults()
  }, [testId])

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">Resultado não encontrado</p>
            <Button onClick={() => router.push("/")}>Voltar ao Início</Button>
          </Card>
        </div>
      </div>
    )
  }

  const percentage = Math.round((result.score / result.totalQuestions) * 100)
  const wrongAnswers = result.answers.filter((a) => !a.correct && a.selectedAnswer !== null)
  const unanswered = result.answers.filter((a) => a.selectedAnswer === null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => router.push("/")} className="gap-2">
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
          Voltar ao Início
        </Button>

        <Card className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto ${
                result.passed ? "bg-emerald-100 dark:bg-emerald-950/30" : "bg-rose-100 dark:bg-rose-950/30"
              }`}
            >
              {result.passed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              )}
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {result.passed ? "Parabéns! Aprovado" : "Não Aprovado"}
              </h1>
              <p className="text-muted-foreground">
                {result.passed ? "Atingiu a nota mínima para aprovação" : "Continue a estudar e tente novamente"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">{percentage}%</div>
                <div className="text-xs text-muted-foreground mt-1">Pontuação</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-600">{result.score}</div>
                <div className="text-xs text-muted-foreground mt-1">Corretas</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-rose-600">{wrongAnswers.length}</div>
                <div className="text-xs text-muted-foreground mt-1">Erradas</div>
              </div>
            </div>

            {unanswered.length > 0 && (
              <Card className="p-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
                <p className="text-sm text-amber-900 dark:text-amber-200">
                  {unanswered.length} questões não foram respondidas
                </p>
              </Card>
            )}
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Button
            onClick={() => router.push("/review")}
            variant="outline"
            size="lg"
            className="h-auto py-4 flex-col gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="font-semibold">Rever Respostas</span>
            <span className="text-xs text-muted-foreground">Ver todas as questões e explicações</span>
          </Button>

          <Button onClick={() => router.push("/simulation")} size="lg" className="h-auto py-4 flex-col gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
            <span className="font-semibold">Nova Simulação</span>
            <span className="text-xs text-muted-foreground">Fazer outro exame de prática</span>
          </Button>
        </div>

        {wrongQuestions.length > 0 && (
          <Card className="p-6">
            <h2 className="font-semibold text-lg mb-4">Questões Erradas</h2>
            <div className="space-y-3">
              {wrongQuestions.map((question, index) => (
                <div key={question.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-600 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm mb-1">{question.text}</p>
                    <CategoryBadge category={question.category} className="text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Carregando resultados...</p>
            </Card>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}
