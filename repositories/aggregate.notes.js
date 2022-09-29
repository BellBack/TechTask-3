const updateStatisticsArray = require("../helpers/array.updater");
const readNotesData = require("../repositories/read.notes");

const generateStats = ()=>{
    let notes = readNotesData(),
        statistics = [];

    notes.forEach(note => {
        updateStatisticsArray(statistics, note.category, note.archived);
    });

    return statistics;
}

module.exports = generateStats;
