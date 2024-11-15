"use client"

import { Target, TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
const chartData = [
  { questions: "15", correct: 10, fill: "var(--color-15)" },
]

const chartConfig = {
  correct: {
    label: "correct",
  },
  15: {
    label: "15",
    color: "hsl(var(--chart-3))",
  },
} 


export function QuestionAnalysis(props) {


  return (
    <Card className="flex flex-col">
      <CardHeader className=" pb-0">
        <CardTitle className="flex flex-row justify-between">
          <div>Question Analysis</div>
          <div className="text-blue-600">{ props?.data?.correctAnswers + "/" + props?.data.totalQuestions || "10/15"}</div>
        </CardTitle>
        <CardDescription> <b>You scored 10 question correct out of 15.</b> However it still needs some improvements</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="correct" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {/* {chartData[0].correct.toLocaleString()} */}
                          {'\u{1F3AF}'}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                        
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
