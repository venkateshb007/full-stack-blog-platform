const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(express.json());
app.use('/api', blogRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
