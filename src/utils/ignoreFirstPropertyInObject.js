export default obj => {
  const output = {};

  Object.keys(obj).forEach((value, key) => {
    console.log('key:', key);
    if (key > 1) {
      output[value] = value;
    }
  });

  console.log('output', output);
  return output;
};