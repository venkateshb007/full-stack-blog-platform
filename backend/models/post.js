// models/post.js

const db = require('../config/database');

const Post = {
  getAllPosts: (callback) => {
    const query = 'SELECT * FROM blogs';
    db.query(query, callback);
  },

  getPostById: (postId, callback) => {
    const query = 'SELECT * FROM blogs WHERE id = ?';
    db.query(query, [postId], callback);
  },

  createPost: (newPost, callback) => {
    const query = 'INSERT INTO blogs (title, content, image) VALUES (?, ?, ?)';
    const { title, content, image } = newPost;
    db.query(query, [title, content, image], callback);
  },

  updatePost: (postId, updatedPost, callback) => {
    const query = 'UPDATE blogs SET title = ?, content = ?, image = ? WHERE id = ?';
    const { title, content, image } = updatedPost;
    db.query(query, [title, content, image, postId], callback);
  },

  deletePost: (postId, callback) => {
    const query = 'DELETE FROM blogs WHERE id = ?';
    db.query(query, [postId], callback);
  },
};

module.exports = Post;
