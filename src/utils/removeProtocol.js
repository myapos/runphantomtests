import replaceString from './replaceString';

export default (url, protocol) => {
  let newUrl = '';
  // console.log('protocol:', protocol, 'url ', url );
  newUrl = replaceString(protocol, '', url);
  console.log('newUrl:', newUrl);
  return newUrl;
};