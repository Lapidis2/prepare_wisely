import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

interface RoleMatchCardProps {
  role: string
  score: number
  level: string
  color: string
}

export function RoleMatchCard({ role, score, level, color }: RoleMatchCardProps) {
  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5 text-green-500" />
    if (score >= 60) return <AlertCircle className="h-5 w-5 text-yellow-500" />
    return <XCircle className="h-5 w-5 text-red-500" />
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{role}</CardTitle>
          {getScoreIcon(score)}
        </div>
        <Badge variant="outline" className="w-fit">
          {level}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Match Score</span>
            <span className={`text-lg font-bold ${getScoreColor(score)}`}>{score}%</span>
          </div>
          <Progress value={score} className="h-2" />
          <div className="text-xs text-gray-500">
            {score >= 80 && "Excellent match! You're well-suited for this role."}
            {score >= 60 && score < 80 && "Good match with room for improvement."}
            {score < 60 && "Consider developing more skills for this role."}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
