import express from 'express';
import { test, updateUser, deleteUser, getUserListings, getUser } from '../contollers/user.contoller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRoute = express.Router();


userRoute.get('/',test)
userRoute.post('/update/:id', verifyToken, updateUser)
userRoute.post('/update/:id', verifyToken, deleteUser)
userRoute.get('/listings/:id', verifyToken, getUserListings)
userRoute.get('/:id', verifyToken, getUser)
export default userRoute;