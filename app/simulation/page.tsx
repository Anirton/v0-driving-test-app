import { SimulationExam } from "@/components/simulation-exam"

const TOTAL_QUESTIONS = 30

export default async function SimulationPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/questions/random?count=${TOTAL_QUESTIONS}`,
    { cache: "no-store" },
  )
  const questions = await response.json()

  return <SimulationExam questions={questions} />
}
