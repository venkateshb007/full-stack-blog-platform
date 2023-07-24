// routes/commentRoutes.js

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

// Get all comments
router.get('/comments', commentController.getAllComments);

// Get comment by ID
router.get('/comments/:id', commentController.getCommentById);

// Create a new comment
router.post('/comments', commentController.createComment);

// Update a comment
router.put('/comments/:id', commentController.updateComment);

// Delete a comment
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
