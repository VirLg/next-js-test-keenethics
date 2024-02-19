'use client';

import React from 'react';
import { Formik, Form, Field } from 'formik';
export type FormAddItemValues = {
  name: string;
  type: string;
  color: string;
  id: string;
  size: string;
  price: string;
  message: string;
};
const initialValues: FormAddItemValues = {
  name: '',
  type: '',
  color: '',
  id: '',
  size: '',
  price: '',
  message: '',
};

export interface FormAddItemProps {
  addItem: (values: FormAddItemValues) => void;
}

const FormAddItem = ({ addItem }: FormAddItemProps) => {
  const handleSubmit = (data: FormAddItemValues) => {
    console.log('value', data);
    console.log('addItem', addItem);
    addItem(data);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={data => handleSubmit(data)}>
      <Form>
        <Field
          name="name"
          placeholder="name"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="text"
        />

        <Field
          name="type"
          placeholder="type"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="text"
        />

        <Field
          name="color"
          placeholder="color"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="text"
        />

        <Field
          name="id"
          placeholder="id"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="text"
        />

        <Field
          name="size"
          placeholder="size"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="number"
        />

        <Field
          name="price"
          placeholder="price"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="number"
        />

        <Field
          name="message"
          placeholder="message"
          // onChange={console.log('first')}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
          type="text"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default FormAddItem;
