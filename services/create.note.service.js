const makeID = require('../helpers/id.generator.js');
const getDatesFromText = require('../helpers/date.finder.js');
const noteValidation = require('./note.validation.service.js');
const getNotesData = require('../repositories/get.notes.data.js');
const updateNotesData = require("../repositories/update.notes.data");

const createNoteService = (req, res) => {
    if (!req.body)
        return res.sendStatus(400).send("Error. Note's data not found!");

    if (!noteValidation(req.body.name, req.body.content, req.body.category))
        return res.sendStatus(422).send('Error. Note data invalid!');

    let notes = getNotesData();

    notes.push({
        id: makeID(10),
        name: req.body.name,
        created:  new Date(),
        category: req.body.category,
        content: req.body.content,
        dates: getDatesFromText(req.body.content),
        archived: false
    });

    updateNotesData(notes);

    res.send('Note created successfully');
};

module.exports = { createNoteService };
