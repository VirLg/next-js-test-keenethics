export const getAllItem = async () => {
  const response = await fetch(
    'https://node-js-test-keenethics-mongobd.onrender.com/api/bikes',
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
};
export const getSingleItem = async id => {
  const response = await fetch(
    `https://node-js-test-keenethics-mongobd.onrender.com/api/bikes/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) throw new Error('Unable to fetch data');

  return response.json();
};
export const addItemApi = async body => {
  const response = await fetch(
    `https://node-js-test-keenethics-mongobd.onrender.com/api/bikes/add`,
    {
      method: 'POST',
      next: {
        revalidate: 60,
      },
      body: JSON.stringify(body),
    }
  );
  if (!response.ok) throw new Error('Unable to fetch data');
  return response.json();
};
