import recognizeProtocol from './recognizeProtocol';
import removeProtocol from './removeProtocol';

export default url => {
  // recognize protocol that is used

  const protocol = recognizeProtocol(url);
  console.log('recognized protocol:', protocol, 'for url:', url);
  // remove protocol of url according to recognized protocol

  const newUrl = removeProtocol(url, protocol);

  return newUrl;
};