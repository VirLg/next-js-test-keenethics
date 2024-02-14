import { getSingleItem } from '@/app/api/api';
import React from 'react';

export interface SingleItemProps {
  params: {
    id: string;
  };
}

export default async function SingleItem({ params: { id } }: SingleItemProps) {
  const singleItem = `${console.log('id', id)}`;

  return <div className="container bg-sky-500 h-[80px]">{singleItem}</div>;
}
