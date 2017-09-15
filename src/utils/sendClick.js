export default async (adCoords, page, offset = 50) => {
  console.log('adCoords: ', adCoords);
  if (adCoords) {
    page.sendEvent('mousemove', adCoords.left + offset, adCoords.top + offset); // move mouse
    await page.sendEvent('click', adCoords.left + offset, adCoords.top + offset); // send click
  }
};
