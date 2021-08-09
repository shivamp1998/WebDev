const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session')
const app = express();

//ejs
app.use(expressLayout);
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
//express session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
//connect flash
app.use(flash());
//global variables
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3000,()=>{
  console.log('Server Started at port 3000!');
})
