// controllers/userController.js

const User = require('../models/user');

const userController = {
  getAllUsers: (req, res) => {
    User.getAllUsers((err, users) => {
      if (err) throw err;
      res.json(users);
    });
  },

  getUserById: (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  },

  createUser: (req, res) => {
    const newUser = req.body;
    User.createUser(newUser, (err, result) => {
      if (err) throw err;
      res.json({ message: 'User created successfully!', id: result.insertId });
    });
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    User.updateUser(userId, updatedUser, (err, result) => {
      if (err) throw err;
      res.json({ message: 'User updated successfully!', id: userId });
    });
  },

  deleteUser: (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (err, result) => {
      if (err) throw err;
      res.json({ message: 'User deleted successfully!', id: userId });
    });
  },
};

module.exports = userController;
