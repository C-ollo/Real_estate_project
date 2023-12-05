import express from 'express';
import { authSignup, google, signIn } from '../contollers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup',authSignup);
authRouter.post('/signin',signIn);
authRouter.post('/google', google);

export default authRouter;


