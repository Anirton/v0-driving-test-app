"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Question } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { incrementFreeTestAttempts } from "@/lib/storage"

interface FreeTestExamProps {
  questions: Question[]
}

export default function FreeTestExam({ questions }: FreeTestExamProps) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({})
  const [showInstructions, setShowInstructions] = useState(true)
  const [timeRemaining, setTimeRemaining] = useState(30 * 60) // 30 minutes in seconds
  const [testEnded, setTestEnded] = useState(false)

  useEffect(() => {
    if (!showInstructions && !testEnded && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time's up - auto submit
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [showInstructions, testEnded])

  useEffect(() => {
    if (timeRemaining === 0 && !showInstructions && !testEnded) {
      handleSubmit()
    }
  }, [timeRemaining, showInstructions, testEnded])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswer = (questionId: string, answer: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = () => {
    setTestEnded(true)
    incrementFreeTestAttempts()
    // Store results in sessionStorage to pass to results page
    const results = questions.map((q) => ({
      question: q,
      userAnswer: answers[q.id],
      isCorrect: answers[q.id] === q.correctAnswer,
    }))
    sessionStorage.setItem("freeTestResults", JSON.stringify(results))
    router.push("/free-test/results")
  }

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 bg-zinc-950 border-zinc-800">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Teste Grátis</h1>

          <div className="space-y-4 mb-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-white">Instruções:</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-400">
                <li>25 questões de múltipla escolha</li>
                <li>Tempo limite: 30 minutos</li>
                <li>O teste terminará automaticamente quando o tempo acabar</li>
                <li>Responda todas as questões</li>
                <li>Clique em TERMINAR para ver os resultados</li>
                <li>Você pode fazer quantos testes quiser - ilimitados!</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => setShowInstructions(false)}
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
            >
              Começar Teste Grátis
            </Button>
            <Link href="/pricing" className="block">
              <Button
                variant="outline"
                className="w-full bg-transparent border-zinc-700 text-white hover:bg-zinc-800"
                size="lg"
              >
                Ver Planos Completos
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const userAnswer = answers[currentQuestion.id]

  const optionsArray = (
    [
      { letter: "A" as const, text: currentQuestion.options.A },
      { letter: "B" as const, text: currentQuestion.options.B },
      { letter: "C" as const, text: currentQuestion.options.C },
      { letter: "D" as const, text: currentQuestion.options.D },
    ] as const
  ).filter((option) => option.text && option.text.trim() !== "")

  const isLastQuestion = currentIndex === questions.length - 1
  const timerColor = timeRemaining < 300 ? "text-red-500" : "text-white"

  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="hidden">
        {questions.map((q, idx) =>
          q.imagePath ? (
            <Image
              key={q.id}
              src={q.imagePath || "/placeholder.svg"}
              alt=""
              width={400}
              height={300}
              priority={idx < 5}
              loading={idx < 5 ? "eager" : "lazy"}
            />
          ) : null,
        )}
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-zinc-950 p-1 rounded-lg shadow-2xl border-2 border-zinc-800">
          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            {/* Header with Question Number, Timer, and Finish Button */}
            <div className="bg-zinc-800 border-b border-zinc-700 px-3 md:px-6 py-2 md:py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <div className="bg-zinc-900 border-2 border-zinc-600 rounded px-3 md:px-4 py-1 font-bold text-base md:text-lg text-white">
                  {currentIndex + 1}
                </div>
                <div
                  className={`bg-zinc-900 border-2 border-zinc-600 rounded px-3 md:px-4 py-1 font-mono font-bold text-base md:text-lg ${timerColor}`}
                >
                  {formatTime(timeRemaining)}
                </div>
              </div>
              <Button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white font-bold w-full md:w-auto text-sm md:text-base"
              >
                TERMINAR
              </Button>
            </div>

            {/* Question Content */}
            <div className="p-3 md:p-6">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4 md:mb-6">
                {currentQuestion.imagePath && (
                  <div className="flex-shrink-0">
                    <div className="relative w-full md:w-56 h-40 md:h-40 bg-zinc-800 border-4 border-zinc-700 rounded overflow-hidden">
                      <Image
                        src={currentQuestion.imagePath || "/placeholder.svg"}
                        alt="Question image"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 224px"
                        quality={90}
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1">
                  <p className="text-sm md:text-lg leading-relaxed text-white">{currentQuestion.text}</p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 md:space-y-3">
                {optionsArray.map((option) => {
                  const isSelected = userAnswer === option.letter

                  return (
                    <button
                      key={option.letter}
                      onClick={() => handleAnswer(currentQuestion.id, option.letter)}
                      className={`w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 border-2 rounded-lg transition-all ${
                        isSelected
                          ? "border-zinc-400 bg-zinc-700"
                          : "border-zinc-700 bg-zinc-800 hover:border-zinc-600 hover:bg-zinc-750"
                      } cursor-pointer`}
                    >
                      {/* Option Letter Circle */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center font-bold text-base ${
                          isSelected
                            ? "border-zinc-300 bg-zinc-600 text-white"
                            : "border-zinc-600 bg-zinc-900 text-white"
                        }`}
                      >
                        {option.letter}
                      </div>

                      {/* Option Text */}
                      <div className="flex-1 text-left">
                        <span className={`text-xs md:text-base ${isSelected ? "font-semibold" : ""} text-white`}>
                          {option.text}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="bg-zinc-800 border-t border-zinc-700 px-3 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3">
              <Button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                variant="outline"
                className="border-zinc-600 text-white hover:bg-zinc-700 w-full md:w-auto text-sm md:text-base"
              >
                ← Anterior
              </Button>

              <div className="text-xs md:text-sm text-zinc-400 text-center order-first md:order-none">
                Questão {currentIndex + 1} de {questions.length} • Respondidas: {Object.keys(answers).length}
              </div>

              {isLastQuestion ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold w-full md:w-auto text-sm md:text-base"
                >
                  Terminar
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  variant="outline"
                  className="border-zinc-600 text-white hover:bg-zinc-700 w-full md:w-auto text-sm md:text-base"
                >
                  Próxima →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
