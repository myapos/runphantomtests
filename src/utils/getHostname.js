const url = require('url');

export default uri => {
  const hostname = url.parse(uri).hostname
    .replace(/www\./, '')
    .replace(/^.[^.]+?\.(?!com\.)(?!.{2,4}$)/g, '') // remove sub
    .toLowerCase();
  console.log('hostname:', hostname);
  return hostname;
};

