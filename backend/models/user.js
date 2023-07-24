// models/user.js

const db = require('../config/database');

const User = {
  getAllUsers: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
  },

  getUserById: (userId, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], callback);
  },

  createUser: (newUser, callback) => {
    const query = 'INSERT INTO users (username, email) VALUES (?, ?)';
    const { username, email } = newUser;
    db.query(query, [username, email], callback);
  },

  updateUser: (userId, updatedUser, callback) => {
    const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
    const { username, email } = updatedUser;
    db.query(query, [username, email, userId], callback);
  },

  deleteUser: (userId, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [userId], callback);
  },
};

module.exports = User;
