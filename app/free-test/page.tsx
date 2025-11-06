import FreeTestExam from "@/components/free-test-exam"
import { questionsData } from "@/lib/questions-data"

export default function FreeTestPage() {
  const shuffled = [...questionsData].sort(() => Math.random() - 0.5)
  const questions = shuffled.slice(0, 10)

  return <FreeTestExam questions={questions} />
}
