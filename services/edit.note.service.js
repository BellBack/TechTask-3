const getDatesFromText = require('../helpers/date.finder.js');
const noteValidation = require('./note.validation.service.js');
const getNotesData = require('../repositories/get.notes.data.js');
const updateNotesData = require("../repositories/update.notes.data");

const editNoteService = (req, res) => {
    if (!req.body)
        return res.sendStatus(400).send("Error. Note's data not found!");

    //archive or unarchive note operation
    let archOper = typeof req.body.archive === 'boolean';

    if (!noteValidation(req.body.name, req.body.content, req.body.category) && !archOper)
        return res.sendStatus(422).send('Error. Inputed data invalid!');

    let notes = getNotesData(),
        index = notes.findIndex(n => n.id === req.params["id"]);

    if (index === -1)
        return res.sendStatus(400).send("Error. There is no such note!");

    if (archOper)
        notes[index].archived = req.body.archive;
    else {
        notes[index].name = req.body.name;
        notes[index].category = req.body.category;
        notes[index].content = req.body.content;
        notes[index].dates = getDatesFromText(req.body.content);
    }

    updateNotesData(notes);
    res.send('Note ' + ((archOper)? (req.body.archive)? 'archived' : 'unarchived' : 'updated') + ' successfully!');
};

module.exports = { editNoteService };
