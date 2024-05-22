var express = require('express');
var router = express.Router({mergeParams: true});
const notesCtrl = require('../controllers/notes');

//EMBEDDED NOTES FUNCTIONALITY BELOW
//GET /patients/:id/notes/new
router.get('/new', notesCtrl.new);
//POST /patients/:id/notes
router.post('/', notesCtrl.create);
module.exports = router; 