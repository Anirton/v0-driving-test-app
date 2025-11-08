"use client"

import { useEffect, useState } from "react"
import FreeTestExam from "@/components/free-test-exam"
import { getRandomExam, markExamAsCompleted } from "@/lib/exam-manager"

export default function FreeTestPage() {
  const [exam, setExam] = useState<{ id: string; number: number; questions: any[] } | null>(null)

  useEffect(() => {
    // Get random exam on client side
    const selectedExam = getRandomExam()
    setExam(selectedExam)
    // Mark exam as completed
    markExamAsCompleted(selectedExam.id)
  }, [])

  if (!exam) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-white text-xl">A carregar exame...</div>
      </div>
    )
  }

  return <FreeTestExam questions={exam.questions} examNumber={exam.number} />
}
