"use client"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CategoryBadge } from "@/components/category-badge"
import { categoryNames } from "@/lib/constants"
import type { QuestionCategory } from "@/lib/types"
import PracticeCategoryClient from "@/components/practice-category-client"

export default async function CategoryPracticePage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  const category = resolvedParams.category as QuestionCategory

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/questions/category/${category}`,
    { cache: "no-store" },
  )

  if (!response.ok) {
    notFound()
  }

  const questions = await response.json()

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Categoria não encontrada</p>
            <Link href="/practice">
              <Button className="mt-4">Voltar</Button>
            </Link>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/practice">
            <Button variant="ghost" className="gap-2">
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

          <CategoryBadge category={category} />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{categoryNames[category]}</h1>
          <p className="text-muted-foreground">Pratique com feedback imediato</p>
        </div>

        <PracticeCategoryClient questions={questions} />
      </div>
    </div>
  )
}
