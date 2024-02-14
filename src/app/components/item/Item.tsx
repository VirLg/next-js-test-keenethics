import React from 'react';

export interface ItemProps {
  data: {
    id: string;
  };
}

export default function Item({ data: { id } }: ItemProps) {
  return (
    <div className="container bg-gray-200 h-[90px] mt-2">
      <div>
        <div style={{ display: 'flex' }}>
          <p>Name : Name</p>
          <p className="font-title">Type : Name{id}</p>
          <p className="font-title">Color : Name{id}</p>
        </div>
        <p style={{ textAlign: 'justify' }}>ID : Name{id}</p>
        <div style={{ display: 'flex', gap: '18px' }}>
          <p className="font-title">Status : </p>
          <select>
            <option value="select">Selected Status</option>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>
      <p className="font-price">Price : 70.00 UAH/hr</p>
    </div>
  );
}
