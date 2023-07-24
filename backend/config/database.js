// config/database.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Use 'root' as your MySQL username since you logged in as 'root' without a password
  password: '', // Leave the password field empty
  database: 'blog_platform_db', // Your database name (the one you created in phpMyAdmin)
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

module.exports = connection;


