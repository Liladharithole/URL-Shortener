import express from 'express';
import { 
  register_user, 
  login_user, 
  getMe 
} from '../controller/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', register_user);
router.post('/login', login_user);

// Protected routes
router.use(protect);
router.get('/me', getMe);

export default router;
