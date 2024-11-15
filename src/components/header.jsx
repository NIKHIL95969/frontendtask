'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { User, Target } from 'lucide-react';
import Image from 'next/image';
import avatarimg from '../asset/avatarimg.png';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `fixed inset-x-0 top-0 z-30 w-full bg-white transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[60px] items-center justify-between px-4 ">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center"
          >
            
            <Target className='w-10 h-10'/>
            <span className="font-bold text-3xl flex ">WhatBytes</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="py-6 rounded" variant="outline" >
            <span className="flex justify-center items-center bg-zinc-300 rounded-full"> 
            <Image
              src={avatarimg} 
              alt="avatar img"
              width={40}  
              height={40}
              quality={75} 
            />
            </span>
            <span className='font-semibold'>Rahil Siddique</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

