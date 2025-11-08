import FreeTestExam from "@/components/free-test-exam"
import { getRandomExam, getShuffledExamQuestions } from "@/lib/exam-pool"

export default function FreeTestPage() {
  // Get a random exam and shuffle its questions
  const randomExam = getRandomExam()
  const questions = getShuffledExamQuestions(randomExam.id, 25)

  return <FreeTestExam questions={questions} />
}
