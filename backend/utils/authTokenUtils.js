import jwt from 'jsonwebtoken';

/**
 * Function to generate access token (expires in 15m)
 * @param {Object} user The user object or payload
 * @returns {String} The generated access token
 */
export const createAccessToken = (user) => {
    return jwt.sign(
      { id: user._id, username: user.username }, // payload
      process.env.ACCESS_TOKEN_SECRET, // secret key
      { expiresIn: '15m' } // expiration time
    );
}

/**
 * Function to generate refresh token (expires in 30d)
 * @param {Object} user The user object or payload
 * @returns {String} The generated refresh token
 */
export const createRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username }, 
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '30d' }
  );
}

/**
 * Function to verify access token
 * @param {String} token The access token
 * @returns {Object} The decoded user object or null if the token is invalid
 */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

/**
 * Function to verify refresh token
 * @param {String} token The refresh token
 * @returns {Object} The decoded user object or null if the token is invalid
 */
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
};