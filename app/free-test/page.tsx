import FreeTestExam from "@/components/free-test-exam"
import { exame22Questions } from "@/lib/exame-22-questions"

export default function FreeTestPage() {
  const shuffled = [...exame22Questions].sort(() => Math.random() - 0.5)
  const questions = shuffled.slice(0, 25)

  return <FreeTestExam questions={questions} />
}
