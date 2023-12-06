import express from 'express';
import { test, updateUser } from '../contollers/user.contoller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRoute = express.Router();


userRoute.get('/',test)
userRoute.post('/update/:id', verifyToken, updateUser)

export default userRoute;