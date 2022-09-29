const readNotesData = require("./read.notes");
const updateNotesData = require("./update.notes");

const deleteNote = (id)=>{
    let notes = readNotesData(),
        index = notes.findIndex(n => n.id === id);

    notes.splice(index, 1);

    updateNotesData(notes);
}

module.exports = deleteNote
