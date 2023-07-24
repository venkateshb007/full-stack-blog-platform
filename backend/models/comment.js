// models/comment.js

const db = require('../config/database');

const Comment = {
  getAllComments: (callback) => {
    const query = 'SELECT * FROM comments';
    db.query(query, callback);
  },

  getCommentById: (commentId, callback) => {
    const query = 'SELECT * FROM comments WHERE id = ?';
    db.query(query, [commentId], callback);
  },

  createComment: (newComment, callback) => {
    const query = 'INSERT INTO comments (post_id, content) VALUES (?, ?)';
    const { post_id, content } = newComment;
    db.query(query, [post_id, content], callback);
  },

  updateComment: (commentId, updatedComment, callback) => {
    const query = 'UPDATE comments SET content = ? WHERE id = ?';
    const { content } = updatedComment;
    db.query(query, [content, commentId], callback);
  },

  deleteComment: (commentId, callback) => {
    const query = 'DELETE FROM comments WHERE id = ?';
    db.query(query, [commentId], callback);
  },
};

module.exports = Comment;
