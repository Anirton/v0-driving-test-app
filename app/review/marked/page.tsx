import ReviewQuestionsClient from "@/components/review-questions-client"
import { getUserProgress } from "@/lib/storage"

export default async function MarkedQuestionsPage() {
  const progress = getUserProgress()
  const questionIds = progress.markedQuestions

  return (
    <ReviewQuestionsClient
      questionIds={questionIds}
      title="Questões Marcadas"
      description="Reveja as questões que marcou"
      emptyMessage="Nenhuma questão marcada para rever"
    />
  )
}
