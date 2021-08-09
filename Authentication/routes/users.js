const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authapp',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Mongodb connected'))
.catch((err)=> console.log(err));
router.get('/login',(req,res)=> {
  res.render('login');
})
router.get('/register',(req,res)=> {
  res.render('register');
})
//register handler
router.post('/register',(req,res)=> {
  const {name,email,password,password2} = req.body;
  let errors = [];
  //check required feilds
  if(!name || !email || !password || !password2) {
    errors.push({msg : "Please Fill in All required Feilds"});
  }
  if(password != password2) {
    errors.push({msg: 'Password Do not Match'});
  }
  if(password.length < 6) {
    errors.push({msg: 'Password Should be at least 6 characters'});
  }

  if(errors.length > 0) {
    res.render('register', {errors, name, email, password, password2});
  }else {
    //Validation pass
    User.findOne({email: email})
    .then(user=>{
     if(user){
       //user exists
       errors.push({msg: "User Already Exists"});
       res.render('register', {errors, name, email, password, password2});
     }else {
       const newUser = new User({
         name,
         email,
         password
       })
       //hash password2
       bcrypt.genSalt(10,(err,salt)=> {
         bcrypt.hash(newUser.password, salt, (error,hash)=> {
           if(err) throw err;
           newUser.password = hash;
           newUser.save()
           .then((user)=> {
             req.flash('success_msg', 'You are now Registered and can Login!');

             res.redirect('/users/login');
           })
           .catch(err => console.log(err))
         })
       });

     }
    })
  }
})
module.exports = router;
