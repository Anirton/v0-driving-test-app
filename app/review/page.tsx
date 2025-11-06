import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

async function getReviewData() {
  // This runs on the server, so we can safely access localStorage via a different method
  // For now, we'll create a client component to handle this
  return { wrongCount: 0, markedCount: 0 }
}

export default async function ReviewPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Revisão</h1>
          <p className="text-muted-foreground">Reveja questões erradas e marcadas</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/review/wrong">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-200 dark:group-hover:bg-rose-950/50 transition-colors">
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
                    className="text-rose-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Questões Erradas
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Reveja as questões que respondeu incorretamente</p>
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

          <Link href="/review/marked">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 dark:group-hover:bg-amber-950/50 transition-colors">
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
                    className="text-amber-600"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Questões Marcadas
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Reveja as questões que marcou para revisão</p>
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
        </div>
      </div>
    </div>
  )
}
