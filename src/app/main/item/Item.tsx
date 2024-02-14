import { getAllItem } from '@/app/api/api';
import Link from 'next/link';
import React from 'react';

export interface ItemProps {}

export default async function Item({}: ItemProps) {
  const arr = await getAllItem();
  return (
    <>
      {arr.map((el: any) => {
        return (
          <li key={el.id}>
            <Link href={`/main/item/${el.id}`}>
              <div className="w-[600px] mt-3 border-slate-600 border-2 rounded-xl bg-gray-200 h-[86px] mt-2 p-2 pl-4">
                <div>
                  <div style={{ display: 'flex' }}>
                    <p>Name : {el.name}</p>
                    <p className="font-title">Type : {el.type}</p>
                    <p className="font-title">Color : {el.id}</p>
                  </div>
                  <p style={{ textAlign: 'justify' }}>ID : {el.id}</p>
                  <div style={{ display: 'flex', gap: '18px' }}>
                    <p className="font-title">Status : </p>
                    <select value={el.stat}>
                      <option value="select">Selected Status</option>
                      <option value="available">Available</option>
                      <option value="busy">Busy</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  </div>
                </div>
                <p className="font-price">Price : {el.price}.00 UAH/hr</p>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}
