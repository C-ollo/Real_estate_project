import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database connected successfully");
    })
    .catch((err) =>{
        console.error(err);
    });

const app = express();

app.listen(3000,()=>{
    console.log('====================================');
    console.log("Server is running on port 3000");
    console.log('====================================');
});

app.use('/api/user/test',userRoute);
