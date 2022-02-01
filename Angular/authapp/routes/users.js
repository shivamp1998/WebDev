const express = require("express");
const router = express.Router();
const User = require("../models/users");
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/register',(req,res,next)=> {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser,(err,user)=> {
    if(err)
      res.json({success: false, msg: "Failed to Register User"});
    else
      res.json({success: true, msg: "User Registered"});
  })
})
router.post('/update',(req,res,next)=> {
   User.findOneAndUpdate({_id: req.body.id},{$set:{username: req.body.name, email: req.body.email}},(err,data)=>{
     if(err) throw err;
     else return res.json({success: true, msg: "user updated"});
   })
})

router.post('/authenticate',(req,res,next)=> {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username,(err,user)=> {
    if(err) throw err;
    if(username==="" || password==="") return res.json({success: false,msg: "All fields are required"});
    if(!user) return res.json({success: false,msg: 'User not found'});
    User.comparePassword(password, user.password, (err, isMatch)=> {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data:user},"secret", {
          expiresIn: 604800,//1 week
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }else {
        return res.json({success: false, msg: "wrong Password"});
      }
    })
  })
});

router.get('/profile',passport.authenticate('jwt',{session: false}),(req,res,next)=>{
  res.json({user: req.user})
});
module.exports = router;
