const express = require("express");
const router = express.Router();

const readNotesStatsMiddleware = require("../middlewares/read.notes.stats.middleware");
const readAllNotesMiddleware = require("../middlewares/read.all.notes.middleware.js");

const createNoteMiddleware = require("../middlewares/crud/create.note.middleware.js");
const readNoteMiddleware = require("../middlewares/crud/read.note.middleware.js");
const updateNoteMiddleware = require("../middlewares/crud/update.note.middleware.js");
const deleteNoteMiddleware = require("../middlewares/crud/delete.note.middleware.js");

//get object with analyzed stats table data
router.get('/stats', readNotesStatsMiddleware);
//Read all notes
router.get('/', readAllNotesMiddleware);

//Create
router.post('/', createNoteMiddleware);
//Read
router.get('/:id', readNoteMiddleware);
//Update
router.patch('/:id', updateNoteMiddleware);
//Delete
router.delete('/:id', deleteNoteMiddleware);

module.exports = router;
