const updateStatistics = require("../helpers/update.statistics.data");
const getNotesData = require("../repositories/get.notes.data");

const aggregateNoteData = (req, res) => {
    let notes = getNotesData(),
        statistics = [];

    notes.forEach(note => {
        updateStatistics(statistics, note.category, note.archived);
    });

    return res.send(statistics);
}

module.exports = aggregateNoteData
