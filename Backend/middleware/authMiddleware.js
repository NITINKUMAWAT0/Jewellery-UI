const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization'); // Retrieve token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  console.log(token)
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the verified user info to the request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticateToken;
