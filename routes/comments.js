const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController')

/* get all. */
router.get('/', commentsController.getComments);

// get a single comment by id
router.get('/:id', commentsController.getComment);

// create a new comment
router.post('/', commentsController.createComment);

// update a comment by id
router.put('/:id', commentsController.editComment);

// delete a comment by id
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
