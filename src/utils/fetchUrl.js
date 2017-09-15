import fetch from 'node-fetch';

import { VALIDATOR_ENDPOINT, VALIDATOR_HEADERS } from '../constants';

export default async function (test, url) {
  const res = await fetch(
    `${VALIDATOR_ENDPOINT}/validator/${test}?url=${url}`,
    { headers: VALIDATOR_HEADERS }
  );

  return res.json();
}
