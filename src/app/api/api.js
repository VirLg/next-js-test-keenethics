export const getAllItem = async () => {
  const response = await fetch(
    'https://node-js-test-keenethics-mongobd.onrender.com/api/bikes'
  );
  return response.json();
};
