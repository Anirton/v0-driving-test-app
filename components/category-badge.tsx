import type { QuestionCategory } from "@/lib/types"
import { categoryNames } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
  category: QuestionCategory
  className?: string
}

const categoryColors: Record<QuestionCategory, string> = {
  "traffic-signs": "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "priority-rules": "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "speed-limits": "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  infractions: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  "general-rules": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  safety: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        categoryColors[category],
        className,
      )}
    >
      {categoryNames[category]}
    </span>
  )
}
