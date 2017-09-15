export default async (page, instance) => {
  await page.close();
  await instance.exit();
  await instance.kill();

  console.log('Terminated OK.');
};
