import express from 'express';

import {registerController , loginController ,testController } from '../controllers/authController.js'

import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router=express.Router()  //router object

router.post('/register',registerController)  //routing Register mthod post


//LOGIN ||POST

router.post('/login',loginController)

//test route

router.get('/test',requireSignIn,isAdmin, testController)

export default router; 