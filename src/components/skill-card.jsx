"use client";
import React, { useState } from 'react'
import { Card, CardDescription, CardHeader } from './ui/card'
import Image from 'next/image'
import image from '../asset/html.png'
import { Button } from './ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from '@radix-ui/react-dialog'

export default function SkillCard(props) {

  const { data, setData } = props

  const [rank, setRank] = useState(data?.rank || '1');
  const [percentile, setPercentile] = useState(data?.percentile || '');
  const [correctAnswers, setCorrectAnswers] = useState(data?.correctAnswers || '');

  const handleSave = () => {
    console.log('Save changes' + rank + percentile + correctAnswers);
    console.log(data);

    if(correctAnswers > 15) {
      alert('Correct Answers should be less than total questions');
      return;
    }

    setData({
      ...data,
      rank,
      percentile,
      correctAnswers,
    });

    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <Card className="flex flex-row p-4 justify-evenly items-center">
        <div>
          <Image
          src={image} 
          alt="External image"
          width={80}
          height={80}
        />
        </div>
        <div> 
          <div className='font-semibold'>Hyper Text Markup Language </div>
          <div>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</div>
        </div>
        <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="rounded bg-indigo-700 font-semibold">Update</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              {/* Rank Field */}
              <div className="flex items-center justify-between w-full">
                <Label htmlFor="rank" className="text-left font-semibold">
                  Update Your Rank
                </Label>
                <Input
                  id="rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="w-[80px]"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <Label htmlFor="percentile" className="text-left font-semibold">
                  Percentile
                </Label>
                <Input
                  id="percentile"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                  className="w-[80px]"
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <Label htmlFor="correctAnswers" className="text-left font-semibold">
                  Correct Answers
                </Label>
                <Input
                  id="correctAnswers"
                  value={correctAnswers} 
                  onChange={(e) => setCorrectAnswers(e.target.value)}
                  className="w-[80px]"
                />
              </div>
            </div>
            <DialogFooter className="flex flex-rowjustify-between">
              {/* <DialogClose asChild>
                <Button type="button" variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </DialogClose> */}
              <Button type="button" onClick={handleSave}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </div>
    </Card>
  )
}

