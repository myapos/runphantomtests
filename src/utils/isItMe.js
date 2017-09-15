import cleanUrl from './cleanUrl';
import replaceString from './replaceString';
import { CLICK } from '../constants';

/* Thi function search in urls object for url in both protocols http and https.
If it is found then it removes it from urls and returns  the rest of it.
urls: object containing urls (could be assets, secure urls etc)
url: source url of creative to be validated */
export default (urls, url) => {
  const output = {};
  // clean Url
  const newUrl = cleanUrl(url);

  Object.keys(urls).forEach(url_ => {
    // remove click from the end of url
    const urlWithNoClick = replaceString(`?click=${CLICK}`, '', url_);

    // clean Url
    const newUrl_ = cleanUrl(urlWithNoClick);

    // check if url equals to url. If it does not add to the output  object

    if (newUrl_ !== newUrl) {
      console.log('from inner condition newUrl:', newUrl);
      output[newUrl_] = newUrl_;
    }
  });
  return output;
};
