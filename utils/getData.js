const { readFileSync } = require('fs');

const loadData = () => {
  return JSON.parse(readFileSync(process.cwd() + '/data/data.json', 'utf-8'));
};

module.exports = { loadData };
