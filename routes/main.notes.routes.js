const express = require("express");
const path = require('path');

const { createNoteService } = require("../services/create.note.service.js");
const { readNoteService } = require("../services/read.note.service.js");
const { editNoteService } = require("../services/edit.note.service.js");
const { deleteNoteService } = require("../services/delete.note.service.js");

const aggregateNoteData = require("../services/aggregate.notes.data.service");
const readAllNotesService = require("../services/read.all.notes.service.js");

const router = express.Router();

//get object with analyzed stats table data
router.get('/stats', aggregateNoteData);
//Read all notes
router.get('/', readAllNotesService);


//Create
router.post('/', createNoteService);
//Read
router.get('/:id', readNoteService);
//Update
router.patch('/:id', editNoteService);
//Delete
router.delete('/:id', deleteNoteService);

module.exports = router;
