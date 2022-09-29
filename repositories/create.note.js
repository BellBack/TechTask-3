const getDatesFromText = require("../helpers/date.finder");
const getNotesData = require("./read.notes");
const makeID = require("../helpers/id.generator");
const updateNotesData = require("./update.notes");

const createNote = (obj)=>{
    let notes = getNotesData();

    notes.push({
        id: makeID(10),
        name: obj.name,
        created:  new Date(),
        category: obj.category,
        content: obj.content,
        dates: getDatesFromText(obj.content),
        archived: false
    });

    updateNotesData(notes);
}

module.exports = createNote
