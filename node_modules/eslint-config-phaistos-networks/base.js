module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  rules: {}
};
