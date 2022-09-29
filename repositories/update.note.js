const getDatesFromText = require("../helpers/date.finder");
const updateNotesData = require("./update.notes");
const readNotesData = require("./read.notes");

const updateNote = (obj, id)=>{
    let notes = readNotesData();
    let index = notes.findIndex(note => note.id === id);
    notes[index].name = obj.name;
    notes[index].category = obj.category;
    notes[index].content = obj.content;
    notes[index].dates = getDatesFromText(obj.content);

    updateNotesData(notes);
    return 'Note updated successfully!';
}
module.exports = updateNote
