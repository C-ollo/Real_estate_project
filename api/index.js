require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO);

const app = express();

app.listen(3000,()=>{
    console.log('====================================');
    console.log("Server is running on port 3000");
    console.log('====================================');
});