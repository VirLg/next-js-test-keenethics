import Link from 'next/link';
import React from 'react';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="container bg-sky-500 h-[80px]">
      <Link href="/main">Main</Link>
      <Link href="/home">Home</Link>
      <Link href="/statistics">Statistics</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
