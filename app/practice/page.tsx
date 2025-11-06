import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CategoryBadge } from "@/components/category-badge"
import { categoryNames } from "@/lib/constants"
import type { QuestionCategory } from "@/lib/types"
import Link from "next/link"

export default async function PracticePage() {
  const categories: QuestionCategory[] = [
    "traffic-signs",
    "priority-rules",
    "speed-limits",
    "infractions",
    "general-rules",
    "safety",
  ]

  const categoryCounts: Record<string, number> = {}
  for (const category of categories) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/questions/category/${category}`,
      { cache: "force-cache" },
    )
    const questions = await response.json()
    categoryCounts[category] = questions.length
  }

  const getCategoryIcon = (category: QuestionCategory) => {
    const icons: Record<QuestionCategory, string> = {
      "traffic-signs":
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      "priority-rules": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      "speed-limits": "M13 10V3L4 14h7v7l9-11h-7z",
      infractions:
        "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      "general-rules":
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      safety:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    }
    return icons[category]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Modo de Prática</h1>
          <p className="text-muted-foreground">Estude por categoria com feedback imediato</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => {
            const questionCount = categoryCounts[category] || 0
            return (
              <Link key={category} href={`/practice/${category}`}>
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
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
                        className="text-primary"
                      >
                        <path d={getCategoryIcon(category)} />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {categoryNames[category]}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{questionCount} questões disponíveis</p>
                      <CategoryBadge category={category} />
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
