const getNotesData = require('../repositories/get.notes.data.js');

const readNoteService = (req, res) => {
    let notes = getNotesData(),
        note = notes.find(note => note.id === req.params["id"]);

    if (!note)
        return res.sendStatus(400).send("Error. There is no such note!");

    res.send(note);
};

module.exports = { readNoteService };

