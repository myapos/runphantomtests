export const RESOURCE_TIMEOUT = 12000; // 12 secs
export const MAX_EXECUTION_TIME = 30000; // 30 s
const isDev = process.env.NODE_ENV !== 'production';
export const DEFAULT_VIEWPORT = {
  width: 1280,
  height: 2280,
};
export const top = 0;
export const left = 0;
export const delayedDuration = 60000; // this duration is used in delayed click test
export const minimumThreshold = 1000; // this duration is used in delayed click test

export const CLICK = 'http://www.adman.gr';
// To run local instance of tank for testing, issue:
// docker run -ti --name local_tank --rm -p 11012:11011 phaistos/tank
// docker exec -ti local_tank tank-cli -b :11011 -t adman_validator create_topic 16
export const TANK_BROKER = isDev ? '192.168.10.240:11011' : '10.5.5.5:11011'; // Live: taris.lan:11011  - Dev: 'localhost:11012'
export const TANK_TOPIC = 'adman_validator';
export const RPC_ENDPOINT = isDev ? 'http://staging.her:30094/backend' : 'http://legolas.lan:30094/backend';
export const RPC_HEADERS = {
  'Resp-Encoding': 'UTF-8',
  'content-type': 'application/json',
};

export const VALIDATOR_ENDPOINT = isDev ? 'http://localhost:3020' : 'http://legolas.lan:3021';
export const VALIDATOR_HEADERS = {
  authorization: 'YWRtYW5BUElWYWxpZGF0b3JLZXk6YWRtYW5BUElWYWxpZGF0b3JLZXlTZWNyZXQ',
};

export const CREATE_OPTIONS = ['--ignore-ssl-errors=true', '--ssl-protocol=any', '--disk-cache=true'];
export const MAX_HEIGHT = 3000;
export const PORT = 3020;
export const htmlErrorstring = `
<p>
  This page is not available. Available routes for tests are:
  <ul>
    <li> /validator/assets </li>
    <li> /validator/admanJs </li>
    <li> /validator/hardCoded </li>
    <li> /validator/invalidClick </li>
    <li> /validator/multipleClicks </li>
    <li> /validator/checkAll </li>
    <li> /validator/delayedClicks </li>
    <li> /validator/scheduledClicks </li>
    <li> /validator/clickable </li>
  </ul>
<p>
`;
