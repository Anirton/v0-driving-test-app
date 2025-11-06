import { type NextRequest, NextResponse } from "next/server"
import { questionsData } from "@/lib/questions-data"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const count = Number.parseInt(searchParams.get("count") || "30")

  // Shuffle and get random questions
  const shuffled = [...questionsData].sort(() => Math.random() - 0.5)
  const randomQuestions = shuffled.slice(0, count)

  return NextResponse.json(randomQuestions)
}
