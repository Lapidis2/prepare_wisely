"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockActivityData = [
  { month: "Jan", commits: 45 },
  { month: "Feb", commits: 52 },
  { month: "Mar", commits: 38 },
  { month: "Apr", commits: 67 },
  { month: "May", commits: 89 },
  { month: "Jun", commits: 76 },
  { month: "Jul", commits: 94 },
  { month: "Aug", commits: 82 },
  { month: "Sep", commits: 71 },
  { month: "Oct", commits: 88 },
  { month: "Nov", commits: 95 },
  { month: "Dec", commits: 103 },
]

export function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={mockActivityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="commits" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6" }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
