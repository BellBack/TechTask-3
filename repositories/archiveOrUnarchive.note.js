const updateNotesData = require("./update.notes");
const readNotesData = require("./read.notes");

const archiveUnarchiveNote = (status, id)=>{
    let notes = readNotesData();
    notes[notes.findIndex(note => note.id === id)].archived = status;
    updateNotesData(notes);
    return status? 'Note archived successfully!' : 'Note unarchived successfully!';
}

module.exports = archiveUnarchiveNote
