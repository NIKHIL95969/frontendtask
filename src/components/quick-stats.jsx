import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { CalendarDays, SquareCheck, Trophy } from 'lucide-react'


export default function QuickStats(props) {

    const data = props.data;

    return (
        <div>
            <Card className="p-2">
                <CardHeader>
                    <CardTitle>Quick Statistics</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-row">
                    {/* <div className='flex justify-start'> */}
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-row justify-center items-center border-r w-full gap-2">
                                <div className='flex justify-center items-center rounded-full p-2 bg-slate-300'>
                                    <Trophy />
                                    {/* {'\u{1F3C6}'} */}
                                </div>
                                <div className='flex flex-col text-sm'>
                                    <div className='font-semibold'>{data?.rank || "1"}</div>
                                    <div className='text-slate-400'>YOUR RANK</div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center border-r w-full gap-2">
                                <div className='flex justify-center items-center rounded-full p-2 bg-slate-300'>
                                    <CalendarDays />
                                </div>
                                <div className='flex flex-col text-sm'>
                                    <div className='font-semibold'>{data?.percentile || "30%"}</div>
                                    <div className='text-slate-400'>PERCENTILE</div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-full gap-2">
                                <div className='flex justify-center items-center rounded-full p-2 bg-slate-300'>
                                    <SquareCheck />
                                </div>
                                <div className='flex flex-col text-sm'>
                                    <div className='font-semibold'>{data?.correctAnswers + "/" + data?.totalQuestions || "10/15"}</div>
                                    <div className='flex flex-row text-slate-400'>CORRECT ANSWERS</div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </CardContent>
            </Card>

        </div>
  )
}
