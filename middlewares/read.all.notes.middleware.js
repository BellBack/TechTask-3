const readNotesData = require('../repositories/read.notes.js');

const readAllNotesMiddleware = (req, res) => {
    res.send(readNotesData());
};

module.exports = readAllNotesMiddleware;
