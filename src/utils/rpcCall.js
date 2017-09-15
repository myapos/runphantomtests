import fetch from 'node-fetch';
import { RPC_ENDPOINT, RPC_HEADERS } from '../constants';

export default async function (m = 'adman.validator.GetUrl', url) {
  const result = await fetch(RPC_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      m,
      a: [url],
    }),
    RPC_HEADERS,
  });

  return result.json();
}
