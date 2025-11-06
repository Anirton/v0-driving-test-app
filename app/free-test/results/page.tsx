"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Question } from "@/lib/types"

interface QuestionResult {
  question: Question
  userAnswer?: "A" | "B" | "C" | "D"
  isCorrect: boolean
}

export default function FreeTestResultsPage() {
  const router = useRouter()
  const [results, setResults] = useState<QuestionResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedResults = sessionStorage.getItem("freeTestResults")
    if (!storedResults) {
      router.push("/free-test")
      return
    }
    setResults(JSON.parse(storedResults))
    setLoading(false)
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-white text-xl">Carregando resultados...</div>
      </div>
    )
  }

  const correctCount = results.filter((r) => r.isCorrect).length
  const totalCount = results.length
  const percentage = (correctCount / totalCount) * 100
  const passed = percentage >= 70

  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-8 bg-zinc-950 border-zinc-800">
          {/* Score Summary */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Resultado do Teste Grátis</h1>
            <div className={`text-6xl font-bold mb-2 ${passed ? "text-green-500" : "text-red-500"}`}>
              {percentage.toFixed(0)}%
            </div>
            <p className="text-xl text-zinc-400">
              {correctCount} de {totalCount} questões corretas
            </p>
          </div>

          {/* Call to Action for Plans */}
          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-green-400 mb-2">Quer mais prática?</h2>
            <p className="text-zinc-300 mb-4">
              Assine um dos nossos planos para ter acesso ilimitado a simulações completas com 30 questões!
            </p>
            <Link href="/pricing">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-bold">Ver Meus Planos</Button>
            </Link>
          </div>

          {/* Detailed Results */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Revisão das Questões</h2>
            {results.map((result, index) => (
              <div
                key={result.question.id}
                className={`p-4 rounded-lg border-2 ${
                  result.isCorrect ? "bg-green-900/20 border-green-700" : "bg-red-900/20 border-red-700"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      result.isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-2">{result.question.text}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-zinc-400">
                        Sua resposta:{" "}
                        <span className={result.isCorrect ? "text-green-400" : "text-red-400"}>
                          {result.userAnswer || "Não respondida"}
                          {result.userAnswer && ` - ${result.question.options[result.userAnswer]}`}
                        </span>
                      </p>
                      {!result.isCorrect && (
                        <p className="text-zinc-400">
                          Resposta correta:{" "}
                          <span className="text-green-400">
                            {result.question.correctAnswer} - {result.question.options[result.question.correctAnswer]}
                          </span>
                        </p>
                      )}
                      {result.question.explanation && (
                        <p className="text-zinc-300 mt-2 italic">{result.question.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Link href="/pricing" className="block">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold" size="lg">
                Ver Planos e Continuar Praticando
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800 bg-transparent">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
