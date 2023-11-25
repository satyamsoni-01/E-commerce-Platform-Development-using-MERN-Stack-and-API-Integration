import express from 'express';

import  colors from 'colors';
import dotenv from 'dotenv';

import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from '../e-commerce/routes/authRoute.js'

//configure env
dotenv.config({path:'D:\\satyam_soni\\placement_preperation\\coding_workspace\\e-commerce\\.env'});

connectDB();   //database config

const app=express()   // rest object

app.use(express.json())
app.use(morgan('dev'))  // middlewares

app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to My E-commerce app'
    })
})

app.use('/api/v1/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to my first E-commerse website using MERN </h1>")
})


// const PORT =8080;   //port

const PORT= process.env.PORT ;


app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})


