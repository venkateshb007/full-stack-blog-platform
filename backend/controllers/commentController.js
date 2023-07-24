// controllers/commentController.js

const Comment = require('../models/comment');

const commentController = {
  getAllComments: (req, res) => {
    Comment.getAllComments((err, comments) => {
      if (err) throw err;
      res.json(comments);
    });
  },

  getCommentById: (req, res) => {
    const commentId = req.params.id;
    Comment.getCommentById(commentId, (err, comment) => {
      if (err) throw err;
      res.json(comment);
    });
  },

  createComment: (req, res) => {
    const newComment = req.body;
    Comment.createComment(newComment, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Comment created successfully!', id: result.insertId });
    });
  },

  updateComment: (req, res) => {
    const commentId = req.params.id;
    const updatedComment = req.body;
    Comment.updateComment(commentId, updatedComment, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Comment updated successfully!', id: commentId });
    });
  },

  deleteComment: (req, res) => {
    const commentId = req.params.id;
    Comment.deleteComment(commentId, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Comment deleted successfully!', id: commentId });
    });
  },
};

module.exports = commentController;
