const data = require('./example-data');

const getHistory = function (args) {
  return data;
};

const getHistoryItem = function (args) {
  const id = args.id;
    return data.filter(item => {
        return item.id === id;
    })[0];
};

const root = {
    history: getHistory,
    historyItem: getHistoryItem
};

module.exports = root;
