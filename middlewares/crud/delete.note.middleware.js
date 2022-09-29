const readNotesData = require("../../repositories/read.notes");
const noteIdCheckerService = require("../../services/note.id.checked");
const deleteNote = require("../../repositories/delete.note");

const deleteNoteMiddleware = (req, res) => {
    let error = noteIdCheckerService(readNotesData(), req.params["id"]);
    if (error){
        res.statusCode = error.status;
        res.send(error.message);
    }

    deleteNote(req.params["id"]);

    res.send('Note deleted successfully!');
};

module.exports = deleteNoteMiddleware;
