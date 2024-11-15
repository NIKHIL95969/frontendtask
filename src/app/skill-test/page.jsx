"use client";

import { LineGraphChart } from '@/components/line-graph-chart'
import { QuestionAnalysis } from '@/components/question-analysis'
import QuickStats from '@/components/quick-stats'
import SkillCard from '@/components/skill-card'
import { SyllabusWiseAnalysis } from '@/components/syllabus-wise-analysis'
import { Card } from '@/components/ui/card'
import React, { useEffect } from 'react'

export default function page() {
  const [data, setData] = React.useState({
    rank: 1,
    percentile: 70,
    correctAnswers: 10,
    totalQuestions: 15
  })

  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-semibold">Skill Test</h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-evenly">
        <div className="flex flex-col gap-6 lg:w-3/5">
          <SkillCard data={data} setData={setData}/>
          <QuickStats data={data}/>
          <LineGraphChart key={data.percentile} data={data}/>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/5">
          <SyllabusWiseAnalysis />
          <QuestionAnalysis data={data}/>
        </div>
      </div>
    </div>
  )
}
