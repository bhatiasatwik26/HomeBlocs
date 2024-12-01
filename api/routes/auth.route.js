import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';
import { validateSignIn, validateSignUp } from '../utils/validate.js';

const router = express.Router();

router.post('/signup', validateSignUp, signup);
router.post('/signin', validateSignIn, signin);

export default router;