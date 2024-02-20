import React from 'react';
import FormAddItem from '../components/form/FormAddItem';
import Item from './item/Item';

import { addItemApi } from '../api/api';

export default function Main() {
  return (
    <div className="flex">
      <div className=" text-xs h-[600px]">
        <ul>
          <Item />
        </ul>
      </div>
      <div>
        <FormAddItem />
      </div>
    </div>
  );
}
