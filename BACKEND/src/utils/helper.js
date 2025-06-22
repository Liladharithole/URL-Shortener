import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/config.js';

export const genrateNanoid = (length) => {
  return nanoid(length);
};

export const signToken = (payload) => {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, jwtConfig.secret);
};

export const createSendToken = (user, statusCode, res) => {
  const token = signToken({ id: user._id });
  const cookieOptions = {
    expires: new Date(
      Date.now() + jwtConfig.cookieExpiresIn * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

