const bodyCheckerService = require("../../services/body.checker.service");
const incomingDataValidationService = require("../../services/incoming.data.validation.service");
const createNote = require("../../repositories/create.note");

const createNoteMiddleware = (req, res) => {
    let error = bodyCheckerService(req.body) ||
                incomingDataValidationService(req.body.name, req.body.content, req.body.category);
    if (error){
        res.statusCode = error.status;
        res.send(error.message);
    }

    createNote(req.body);

    res.send('Note created successfully');
};

module.exports = createNoteMiddleware;
