const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
const {ensureAuthenticated} = require('../config/auth');
const uri = require('../config/keys').MongoURI;


mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>console.log('Mongodb connected'))
.catch((err)=> console.log(err));
router.get('/login',(req,res)=> {
  res.render('login');
})
router.get('/register',(req,res)=> {
  res.render('register');
});
router.get('/update',ensureAuthenticated,(req,res)=> {
  res.render('update')
});
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
});
var loggedEmail;
//update page handler
router.post('/update',(req,res,next)=> {
    console.log(req.body.name);
    User.findOneAndUpdate({email:loggedEmail},{$set:{name: req.body.updatedName}},(err,doc)=> {
      if(err) throw err;
      console.log(doc);
      res.redirect('/dashboard');
    })
})

//login handle
router.post('/login',(req,res,next)=> {
  loggedEmail = req.body.email;
  passport.authenticate('local',{
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req,res,next);
})

//logout handle
router.get('/logout',(req,res,next)=> {
  req.logout();
  req.flash('success_msg','You are logged out!');
  res.redirect('/users/login');

})

module.exports = router;
