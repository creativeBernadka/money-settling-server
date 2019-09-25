const historyItem = require('../mongodb/schema');

const getHistory = function (args) {
  return historyItem.find({});
};

const getHistoryItem = function (args) {
    const id = args.id;
    return historyItem.findOne({_id: id});
};

const insertHistoryItem = function (args) {
    const historyElement = new historyItem(args.historyElement);
    historyElement.save(function (err, item) {
        if (err) return console.error(err);
        console.log(item.name + " saved to collection.");
    });
    return historyElement
};

const updateHistoryItem = function (args) {
    const id = args.id;
    return historyItem.findOneAndUpdate({_id: id}, args.historyElement);
};

const root = {
    history: getHistory,
    historyItem: getHistoryItem,
    insertHistoryItem: insertHistoryItem,
    updateHistoryItem: updateHistoryItem
};

module.exports = root;
