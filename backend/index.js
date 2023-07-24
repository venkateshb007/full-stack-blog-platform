// index.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const port = 3000; // Set the desired port number

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
