// routes/postRoutes.js

const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// Get all posts
router.get('/posts', postController.getAllPosts);

// Get post by ID
router.get('/posts/:id', postController.getPostById);

// Create a new post
router.post('/posts', postController.createPost);

// Update a post
router.put('/posts/:id', postController.updatePost);

// Delete a post
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
