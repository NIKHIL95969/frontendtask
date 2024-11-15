"use client"

import { CartesianGrid, Dot, Line, LineChart, XAxis, ReferenceLine } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"

const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const students = [0, 20, 46, 60, 80, 150, 100, 80, 120, 70, 77];

const xAxisTicks = [0, 25, 50, 75, 100];

const chartConfig = {
  students: {
    label: "No. of Students",
    color: "hsl(var(--chart-1))",
  }
}

export function LineGraphChart(props) {
  const [currentPercentage, setCurrentPercentage] = useState(props?.data?.percentile || 50);

  // useEffect(() => {
  //   setCurrentPercentage(props?.data?.percentile || 50);
  //   console.log('currentPercentage', currentPercentage);
  // }, [props?.data?.percentile]);

  // useEffect(() => {
  //   console.log("currentPercentage updated:", currentPercentage);
  // }, [currentPercentage]);  // This effect runs whenever currentPercentage changes


  const chartData = percentages.map((percentage, index) => ({
    percentage,
    students: students[index],
  }));



  return (
  
      <Card>
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <CardDescription>
          <b>You scored {currentPercentage}% percentile</b> which is lower than the <br />
          average percentile 72% of all the engineers who took this assessment
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}  
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="percentage"  
              ticks={xAxisTicks}
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => `${value}%`}  
            />

            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />

            <Line
              dataKey="students"  
              type="natural"
              stroke="var(--color-students)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                  key={`${payload.percentage}-${payload.students}`} 
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                )
              }} 
            />
            <ReferenceLine
              x={currentPercentage}  
              stroke="blue"
              strokeWidth={0.5}
              strokeDasharray="3 3"
              label={`Current percentile: ${currentPercentage}%`}
              labelAlign="top"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>

  );
}
