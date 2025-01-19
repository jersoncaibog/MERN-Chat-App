import { verifyAccessToken } from '../utils/authTokenUtils.js';

export const authenticateToken = (req, res, next) => {
  
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded; // Attach user info to the request object
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired access token' });
  }
};
