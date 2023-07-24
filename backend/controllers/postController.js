// controllers/postController.js

const Post = require('../models/post');

const postController = {
  getAllPosts: (req, res) => {
    Post.getAllPosts((err, posts) => {
      if (err) throw err;
      res.json(posts);
    });
  },

  getPostById: (req, res) => {
    const postId = req.params.id;
    Post.getPostById(postId, (err, post) => {
      if (err) throw err;
      res.json(post);
    });
  },

  createPost: (req, res) => {
    const newPost = req.body;
    Post.createPost(newPost, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Post created successfully!', id: result.insertId });
    });
  },

  updatePost: (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;
    Post.updatePost(postId, updatedPost, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Post updated successfully!', id: postId });
    });
  },

  deletePost: (req, res) => {
    const postId = req.params.id;
    Post.deletePost(postId, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Post deleted successfully!', id: postId });
    });
  },
};

module.exports = postController;
