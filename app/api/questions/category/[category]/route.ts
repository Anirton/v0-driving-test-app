import { NextResponse } from "next/server"
import { questionsData } from "@/lib/questions-data"

export async function GET(request: Request, { params }: { params: { category: string } }) {
  const category = params.category
  const questions = questionsData.filter((q) => q.category === category)

  return NextResponse.json(questions)
}
