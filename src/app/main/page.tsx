import React from 'react';
import Item from '../components/item/Item';
import Link from 'next/link';

export interface MainProps {
  companyId: string;
}
const getAllItem = async () => {
  const response = await fetch(
    'https://node-js-test-keenethics-mongobd.onrender.com/api/bikes'
  );
  return response.json();
};

export default async function Main({}: MainProps) {
  const arr = await getAllItem();

  return (
    <div className=" text-xs h-[600px]">
      <ul>
        {arr.map((el: any) => {
          return (
            <li key={el.id}>
              <Link href={`/item/${el.id}`}>
                <Item data={el} />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <Item />
      <Item /> */}
    </div>
  );
}
