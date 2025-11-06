import { NextResponse } from "next/server"
import { questionsData } from "@/lib/questions-data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const question = questionsData.find((q) => q.id === params.id)

  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 })
  }

  return NextResponse.json(question)
}
