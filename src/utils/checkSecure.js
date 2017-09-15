export default async (resources, protocol) => {
  const failed = {};

  await resources.forEach((value, key) => {
    const regEx = new RegExp(protocol, 'igm');

    if (key.match(regEx)) {
      failed[key] = key;
    }
  });

  return failed;
};
