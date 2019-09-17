const data = require('./example-data');
const historyItem = require('../mongodb/schema');

const getHistory = function (args) {
  return data;
};

const getHistoryItem = function (args) {
  const id = args.id;
    return data.filter(item => {
        return item.id === id;
    })[0];
};

const insertHistoryItem = function (args) {
    const historyElement = new historyItem(args.historyElement);
    historyElement.save(function (err, item) {
        if (err) return console.error(err);
        console.log(item.name + " saved to collection.");
    });
    return historyElement
};

const root = {
    history: getHistory,
    historyItem: getHistoryItem,
    insertHistoryItem: insertHistoryItem
};

module.exports = root;
