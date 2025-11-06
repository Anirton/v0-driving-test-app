import { type NextRequest, NextResponse } from "next/server"
import { questionsData } from "@/lib/questions-data"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const idsParam = searchParams.get("ids")

  if (!idsParam) {
    return NextResponse.json([])
  }

  const ids = idsParam.split(",")
  const questions = questionsData.filter((q) => ids.includes(q.id))

  return NextResponse.json(questions)
}
