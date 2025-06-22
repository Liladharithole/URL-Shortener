
import { registerUserService, loginUserService } from '../services/auth.services.js';
import { createSendToken } from '../utils/helper.js';
import AppError from '../utils/appError.js';

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register_user = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // 1) Check if all fields are provided
    if (!name || !email || !password) {
      return next(new AppError('Please provide name, email, and password', 400));
    }

    // 2) Create new user
    const newUser = await registerUserService({ name, email, password });

    // 3) Generate token and send response
    createSendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login_user = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError('Please provide email and password', 400));
    }

    // 2) Check if user exists && password is correct
    const user = await loginUserService({ email, password });

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    next(error);
  }
};
