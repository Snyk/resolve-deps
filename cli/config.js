module.exports = {
  return: true,
  commands: {
    _: 'cli/resolve',
  },
  options: ['filter', 'count'],
  alias: { d: 'dev', g: 'filter' },
  booleans: ['disk', 'json', 'errors', 'dev', 'production', 'optional']
    .concat(require('./filter').flags),
  help: 'usage.txt',
};