const express = require('express');
const router = express.Router();


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
    res.render('register', {error, name, email, pass});
  }else {
    res.send('Pass!');
  }
})
module.exports = router;
