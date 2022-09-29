const express = require("express");
const path = require('path');

const createNoteService = require("../services/create.note.service.js");
const readNoteService = require("../services/read.note.service.js");
const editNoteService = require("../services/edit.note.service.js");
const deleteNoteService = require("../services/delete.note.service.js");

const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")));

//Create a note object.
router.post('/', createNoteService);
//Retrieve item. (get note)
router.get('/:id', readNoteService);
//Edit item.
router.patch('/:id', editNoteService);
//Remove item.
router.delete('/:id', deleteNoteService);


//Get aggregated data statistics. You don’t have to mock this data. You need to calculate it based on notes objects you have.
//get object with analyzed stats table data
router.get('/stats',()=>{

});
//Get all notes.
router.get('/',()=>{

});

module.exports = router;
