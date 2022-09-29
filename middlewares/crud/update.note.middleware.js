const bodyCheckerService = require("../../services/body.checker.service");
const incomingDataValidationService = require("../../services/incoming.data.validation.service");
const archiveOperationCheckerService = require("../../services/archive.operation.checker.service");
const noteIdCheckerService = require("../../services/note.id.checked");
const archiveUnarchiveNote = require("../../repositories/archiveOrUnarchive.note");
const updateNote = require("../../repositories/update.note");
const readNotesData = require("../../repositories/read.notes");

const updateNoteMiddleware = (req, res) => {
    let error = bodyCheckerService(req.body) ||
        noteIdCheckerService(readNotesData(), req.params["id"]) ||
        (incomingDataValidationService(req.body.name, req.body.content, req.body.category) &&
        archiveOperationCheckerService(req.body.archive));
    if (error){
        res.statusCode = error.status;
        res.send(error.message);
    }

    if (req.body.archive !== undefined)
        res.send(archiveUnarchiveNote(req.body.archive, req.params["id"]));
    else
        res.send(updateNote(req.body, req.params["id"]));
};

module.exports = updateNoteMiddleware;
