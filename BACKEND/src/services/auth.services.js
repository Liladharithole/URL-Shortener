import bcrypt from 'bcryptjs';
import { findUserByEmail, createUser } from '../dao/user.dao.js';
import { signToken } from '../utils/helper.js';

export const registerUserService = async ({ name, email, password }) => {
  try {
    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await createUser({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = signToken({ userId: user._id });

    // Remove password from response
    const userObj = user.toObject();
    delete userObj.password;

    return { user: userObj, token };
  } catch (error) {
    console.error('Error in registerUserService:', error);
    throw error;
  }
};

export const loginUserService = async ({ email, password }) => {
  try {
    console.log('Attempting to login user with email:', email);
    
    // Find user by email
    const user = await findUserByEmail(email);
    console.log('User found:', user ? 'Yes' : 'No');
    
    if (!user) {
      console.log('No user found with email:', email);
      throw new Error('Invalid credentials');
    }

    // Check if user has a password (in case they signed up with OAuth)
    if (!user.password) {
      console.log('User has no password set (possibly signed up with OAuth)');
      throw new Error('Please log in using your social account');
    }

    // Check password
    console.log('Comparing passwords...');
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch);
    
    if (!isMatch) {
      console.log('Invalid password for user:', email);
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = signToken({ userId: user._id });

    // Remove password from response
    const userObj = user.toObject();
    delete userObj.password;

    return { user: userObj, token };
  } catch (error) {
    console.error('Error in loginUserService:', error);
    throw error;
  }
};
