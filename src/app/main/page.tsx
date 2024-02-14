import React from 'react';

import Item from './item/Item';
export interface MainProps {}

export default async function Main({}: MainProps) {
  return (
    <div className=" text-xs h-[600px]">
      <ul>
        <Item />
      </ul>
    </div>
  );
}
