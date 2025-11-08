"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

type CategoryLevel = "ligeiro" | "pesado" | "profissional"

export default function CategoriesPage() {
  const router = useRouter()
  const [selectedLevel, setSelectedLevel] = useState<CategoryLevel | null>(null)

  const levels: { id: CategoryLevel; label: string; description: string }[] = [
    {
      id: "ligeiro",
      label: "Ligeiro",
      description: "Categoria para condução de veículos leves",
    },
    {
      id: "pesado",
      label: "Pesado",
      description: "Categoria para condução de veículos pesados",
    },
    {
      id: "profissional",
      label: "Profissional",
      description: "Categoria para motoristas profissionais",
    },
  ]

  const handleContinue = () => {
    if (selectedLevel) {
      router.push(`/pricing?category=${selectedLevel}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
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
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Escolha Sua Categoria</h1>
          <p className="text-muted-foreground">Selecione a categoria de licença que deseja preparar</p>
        </div>

        <div className="space-y-4 mb-8">
          {levels.map((level) => (
            <Card
              key={level.id}
              className={`p-6 cursor-pointer transition-all border-2 ${
                selectedLevel === level.id
                  ? "border-green-600 bg-green-600/5"
                  : "border-transparent hover:border-green-600/50"
              }`}
              onClick={() => setSelectedLevel(level.id)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    selectedLevel === level.id ? "border-green-600 bg-green-600" : "border-muted-foreground"
                  }`}
                >
                  {selectedLevel === level.id && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{level.label}</h3>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <Link href="/">Cancelar</Link>
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!selectedLevel}
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50"
          >
            Continuar para Planos
          </Button>
        </div>
      </div>
    </div>
  )
}
