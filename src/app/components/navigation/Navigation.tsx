'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type NavLinks = {
  label: string;
  href: string;
};
export interface NavigationProps {
  navLinks: NavLinks[];
}
const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map(el => {
        const isActive = pathname === el.href;
        return (
          <Link
            key={el.label}
            href={el.href}
            className={isActive ? 'active' : ''}
          >
            {el.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
