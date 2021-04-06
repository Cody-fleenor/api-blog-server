const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')


/* get all. */
router.get('/', postsController.getPosts);

// get a single post by id
router.get('/:id', postsController.getPost);

// create a new post
router.post('/', postsController.createPost);

// update a post by id
router.put('/:id', postsController.editPost);

// delete a post by id
router.delete('/:id', postsController.deletePost);

module.exports = router;
