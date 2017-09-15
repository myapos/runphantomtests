import { left, top } from '../constants';
import waitFor from './waitFor';
import sendClick from './sendClick';

export default async (page, delay) => {
  console.log('delay:', delay);
  const ret = await waitFor(async () => {
    try {
      await sendClick({ left, top }, page);
    } catch (e) {
      console.log('Error happened:', e);
    }
  }, delay);
  await ret;
  return ret;
};

