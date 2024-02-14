import React from 'react';

export interface SingleItemProps {
  params: {
    id: string;
  };
}

export default function SingleItem({ params: { id } }: SingleItemProps) {
  return (
    <header className="container bg-sky-500 h-[80px]">SingleItem{id}</header>
  );
}
