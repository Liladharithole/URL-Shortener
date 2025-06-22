import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export const cookieOptions = {
  expires: new Date(
    Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN || 90) * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
};

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: process.env.JWT_EXPIRES_IN || '90d',
  cookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN || 90, // days
};

export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
};

// Add other configurations as needed
export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/url-shortener',
  appUrl: process.env.APP_URL || 'http://localhost:3000',
};