"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { getFreeTestAttempts } from "@/lib/storage"

export default function WrongProtectedPage() {
  const router = useRouter()
  const hasCompletedFreeTest = getFreeTestAttempts() > 0

  useEffect(() => {
    if (!hasCompletedFreeTest) {
      router.push("/free-test")
    } else {
      router.push("/review/wrong")
    }
  }, [hasCompletedFreeTest, router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">Redirecionando...</p>
        </Card>
      </div>
    </div>
  )
}
