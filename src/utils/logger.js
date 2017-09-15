// Remember: use console.info not log
const noop = () => {};

export default {
  log: noop,
  info: console.info,
  warn: noop,
  error: noop,
  debug: noop,
};
