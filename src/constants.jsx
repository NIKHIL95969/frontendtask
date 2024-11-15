import { Award, ChartNoAxesColumn, StickyNote } from 'lucide-react';

export const SIDENAV_ITEMS = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <ChartNoAxesColumn />,
    
  },
  {
    title: 'Skill Test',
    path: '/skill-test',
    icon: <Award/>,
  },
  {
    title: 'Internship',
    path: '/internship',
    icon: <StickyNote />,
  },
];