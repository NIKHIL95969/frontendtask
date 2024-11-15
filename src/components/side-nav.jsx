'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { Target } from 'lucide-react';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed z-0 border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full pt-20">

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS?.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }) => {
  const pathname = usePathname();
//   const [subMenuOpen, setSubMenuOpen] = useState(false);
//   const toggleSubMenu = () => {
//     setSubMenuOpen(!subMenuOpen);
//   };

  return (
    <div className="">
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-2xl hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-blue-50 text-blue-700' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-base flex">{item.title}</span>
        </Link>
    </div>
  );
};