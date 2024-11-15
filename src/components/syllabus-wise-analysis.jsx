"use client"

import { Percent, TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Progress } from "@/components/ui/progress"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { syllabus: "Topic1", scores: 80, color: "text-red-600", fill: "bg-red-600", basefill: "bg-red-100" },
  { syllabus: "Topic3", scores: 24, color: "text-green-600", fill: "bg-green-600", basefill: "bg-green-100"},
  { syllabus: "Topic2", scores: 60, color: "text-blue-600", fill: "bg-blue-600", basefill: "bg-blue-100"},
  { syllabus: "Topic4", scores: 96, color: "text-orange-600", fill: "bg-orange-600", basefill: "bg-orange-100"},
]

const chartConfig = {
  scores: {
    label: "scores",
  },
  Topic1: {
    label: "HTML Tools, Forms, History",
    color: "hsl(var(--chart-1))",
  },
  Topic2: {
    label: "Tags & References in HTML",
    color: "hsl(var(--chart-2))",
  },
  Topic3: {
    label: "Tables & References in HTML",
    color: "hsl(var(--chart-3))",
  },
  Topic4: {
    label: "Tables & CSS Basics",
    color: "hsl(var(--chart-4))",
  },
}

export function SyllabusWiseAnalysis() {
  return (
    <Card className=" w-full">
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-col gap-6 justify-between">
          { chartData && chartData?.map( (item) => (
            <div key={item.syllabus}> 
                <div className="flex items-center">
                    <span className="text-sm">{chartConfig?.[item.syllabus]?.label}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Progress className={`${item.basefill}`} indicatorColor={`${item.fill}`} value={item.scores} />
                    <div className={`flex flex-row text-sm ${item.color}`}>
                    <span>  {item.scores}</span>
                    <Percent size="16" />
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* </ChartContainer> */}
      </CardContent>
    </Card>
  )
}
