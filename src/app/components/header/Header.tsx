import Link from 'next/link';
import React from 'react';
import Navigation from '../navigation/Navigation';

export interface HeaderProps {}
const navItems = [
  { label: 'Main', href: '/main' },
  { label: 'Home', href: '/home' },
  { label: 'Statistics', href: '/statistics' },
  { label: 'About', href: '/about' },
];
export default function Header({}: HeaderProps) {
  return (
    <header className="container bg-sky-500 h-[80px] pt-6">
      <Navigation navLinks={navItems} />
    </header>
  );
}
{
  /* <ul className=" flex justify-center ">
        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/main">Main</Link>
        </li>

        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/home">Home</Link>
        </li>
        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/statistics">Statistics</Link>
        </li>
        <li className="hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/about">About</Link>
        </li>
      </ul> */
}
