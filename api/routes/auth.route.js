import express from 'express';
import { authSignup, signIn } from '../contollers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup',authSignup);
authRouter.post('/signin',signIn);

export default authRouter;


