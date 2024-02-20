'use client';

// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// export type FormAddItemValues = {
//   name: string;
//   type: string;
//   color: string;
//   id: string;
//   size: string;
//   price: string;
//   message: string;
// };
// const initialValues: FormAddItemValues = {
//   name: '',
//   type: '',
//   color: '',
//   id: '',
//   size: '',
//   price: '',
//   message: '',
// };

// export interface FormAddItemProps {
//   // addItem: (values: FormAddItemValues) => void;
// }

// const FormAddItem = () => {
//   const handleSubmit = () => {};
//   return (
//     <Formik initialValues={initialValues} onSubmit={value => handleSubmit()}>
//       <Form>
//         <Field
//           name="name"
//           placeholder="name"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="text"
//         />

//         <Field
//           name="type"
//           placeholder="type"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="text"
//         />

//         <Field
//           name="color"
//           placeholder="color"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="text"
//         />

//         <Field
//           name="id"
//           placeholder="id"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="text"
//         />

//         <Field
//           name="size"
//           placeholder="size"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="number"
//         />

//         <Field
//           name="price"
//           placeholder="price"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="number"
//         />

//         <Field
//           name="message"
//           placeholder="message"
//           // onChange={console.log('first')}
//           className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
//           type="text"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };
// export default FormAddItem;
import React from 'react';
import * as Yup from 'yup';
// import { useAddBikeMutation } from '../redux/rtkQuery/bikes';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const FormAddItem = () => {
  // const [addBike] = useAddBikeMutation();

  const valueForm = data => {
    console.log('data', data);
    // addBike(data);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        color: '',
        wheelSize: '',
        price: '',
        description: '',
        id: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        type: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        color: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        wheelSize: Yup.number()
          .min(10, 'Minimum Must be  10 ')
          .max(50, 'Maximum Must be  50 ')
          .required('Required'),
        price: Yup.number().max(100, 'Must be 100').required('Required'),
        description: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        id: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
      })}
      onSubmit={value => valueForm(value)}
    >
      <Form
        className="form-container"
        style={{ width: '490px', padding: '10px', gap: '12px' }}
      >
        <Field className="field" placeholder="name" name="name" type="text" />
        <ErrorMessage name="name">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field className="field" placeholder="type" name="type" type="text" />
        <ErrorMessage name="type">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field className="field" placeholder="color" name="color" type="text" />
        <ErrorMessage name="color">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field
          className="field"
          placeholder="Wheel Size must be on 10 to 50"
          name="wheelSize"
          type="number"
        />
        <ErrorMessage name="wheelSize">
          {errorMsg => alert(errorMsg)}
        </ErrorMessage>

        <Field
          className="field"
          placeholder="price"
          name="price"
          type="number"
        />
        <ErrorMessage name="price">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field className="field" placeholder="id" name="id" type="text" />
        <ErrorMessage name="id">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field
          name="description"
          className="field-discription"
          placeholder="description"
          type="text"
        />
        <ErrorMessage name="description">
          {errorMsg => alert(errorMsg)}
        </ErrorMessage>

        <button type="submit" className="button-form">
          Save
        </button>
        <button type="button" className="button-form">
          Clear
        </button>
      </Form>
    </Formik>
  );
};

export default FormAddItem;
