const fs = require("fs");
const path = require('path');

const updateNotes = notes => {
    fs.writeFileSync(path.join(__dirname, "../notes.json"), JSON.stringify(notes));
}

module.exports = updateNotes
