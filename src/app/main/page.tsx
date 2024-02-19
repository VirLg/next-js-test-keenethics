'use client';
import React from 'react';

import Item from './item/Item';
import FormAddItem from '../components/form/FormAddItem';
import { addItemApi } from '../api/api';

export interface MainProps {
  // addItem: () => void;
}
export default function Main({}: MainProps) {
  const addItem = (data: any) => {
    console.log('first', data);
    addItemApi(data);
  };
  return (
    <div className="flex">
      <div className=" text-xs h-[600px]">
        <ul>
          <Item />
        </ul>
      </div>
      <div>
        <FormAddItem addItem={addItem} />
      </div>
    </div>
  );
}
