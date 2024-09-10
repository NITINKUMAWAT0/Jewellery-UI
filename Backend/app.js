const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes')
const db = require('./config/db');
const CORS = require('cors')
dotenv.config();

const app = express();
app.use(CORS())
// Middleware
app.use(express.json());
// Authentication Routes
app.use('/api/auth', authRoutes);
app.use('/api/home' , homeRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});