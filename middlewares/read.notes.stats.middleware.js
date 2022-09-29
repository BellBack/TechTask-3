const generateStats = require("../repositories/aggregate.notes");

const readNotesStatsMiddleware = (req, res) => {
    res.send(generateStats());
}

module.exports = readNotesStatsMiddleware
