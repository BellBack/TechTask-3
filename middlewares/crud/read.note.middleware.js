const noteIdCheckerService = require("../../services/note.id.checked");
const readNotesData = require("../../repositories/read.notes");

const readNoteMiddleware = (req, res) => {
    let error = noteIdCheckerService(readNotesData(), req.params["id"]);
    if (error) {
        res.statusCode = error.status;
        res.send(error.message);
    }
    res.send(readNotesData().find(note => note.id === req.params["id"]));
};

module.exports = readNoteMiddleware;

