import express from 'express';
import { test } from '../contollers/user.contoller.js';
const userRoute = express.Router();


userRoute.get('/',test)

export default userRoute;