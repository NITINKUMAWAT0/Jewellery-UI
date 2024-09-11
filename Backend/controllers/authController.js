const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const User = require('../Models/User');

// Register a new user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    // Check if the user exists
    const [existingUser] = await db.query('SELECT * FROM Authentications WHERE email = ?', [email]);
    if (existingUser.length) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    await db.query('INSERT INTO Authentications (username, email, password) VALUES (?, ?, ?)', [
      username,
      email,
      hashedPassword,
    ]);
    const [user] = await db.query('SELECT * FROM Authentications WHERE email = ?', [email]);
    if (!user.length) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET);
    return res.status(201).json({ message: 'User registered successfully' , token});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Check if the user exists
    const [user] = await db.query('SELECT * FROM Authentications WHERE email = ?', [email]);
    if (!user.length) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET);
    
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.verify_jwt_token = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified){
      return res.status(201).json({ valid: false , message: 'Invalid Token' });
    }
    const verifiedID = await User.FindAdminById(verified.id)
    return res.status(200).json({ valid: true, user: verified , AdminMember:verifiedID});
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
  }
};