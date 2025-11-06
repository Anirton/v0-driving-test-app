"use client"

import ReviewQuestionsClient from "@/components/review-questions-client"
import { getUserProgress } from "@/lib/storage"

export default function WrongQuestionsPage() {
  // Note: This will run on the server, but getUserProgress uses localStorage
  // We need to handle this on the client side
  return (
    <ReviewQuestionsClient
      questionIds={getUserProgress().wrongQuestions}
      title="Questões Erradas"
      description="Reveja e aprenda com os seus erros"
      emptyMessage="Nenhuma questão errada para rever"
    />
  )
}
