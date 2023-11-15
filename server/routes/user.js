const express = require('express');
const User = require('../models/user');
const router = express.Router();
const {handleUserSignUp,handleUserSignIn}=require('../controllers/user')
router.post('/signup',handleUserSignUp );
router.post('/signin', handleUserSignIn);

module.exports= router;