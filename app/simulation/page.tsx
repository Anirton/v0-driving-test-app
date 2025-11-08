import { SimulationExam } from "@/components/simulation-exam"
import { getRandomQuestions } from "@/lib/questions-db"

const TOTAL_QUESTIONS = 30

export default function SimulationPage() {
  const questions = getRandomQuestions(TOTAL_QUESTIONS)

  return <SimulationExam questions={questions} />
}
