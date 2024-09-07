const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');
const CORS = require('cors')
dotenv.config();

const app = express();
app.use(CORS())
// Middleware
app.use(express.json());
// Authentication Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

db.getConnection()
  .then(() => {
    console.log('Connected to the MySQL Database.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err));
