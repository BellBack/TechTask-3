const getNotesData = require('../repositories/get.notes.data.js');

const readAllNotesService = (req, res) => {
    res.send(getNotesData());
};

module.exports = readAllNotesService;
