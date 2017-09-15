export default url => {
  let protocol = '';
  if (url.indexOf('http://') === 0) {
    protocol = 'http://';
  } else if (url.indexOf('https://') === 0) {
    protocol = 'https://';
  } else {
    protocol = 'No protocol was recognized';
  }
  return protocol;
};