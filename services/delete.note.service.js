const getNotesData = require('../repositories/get.notes.data.js');
const updateNotesData = require("../repositories/update.notes.data");

const deleteNoteService = (req, res) => {
    if (!req.body)
        return res.sendStatus(400).send("Error. Note's data not found!");

    let notes = getNotesData(),
        index = notes.findIndex(n => n.id === req.params["id"]);

    if (index === -1)
        return res.sendStatus(400).send("Error. There is no such note!");

    notes.splice(index, 1);

    updateNotesData(notes);

    res.send('Note deleted successfully!');
};

module.exports = { deleteNoteService };
