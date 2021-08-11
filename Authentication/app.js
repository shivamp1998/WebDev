const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session')
const app = express();
const passport = require('passport');
//mongoose connect
const port = process.env.PORT || 3000;
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
//passport config
require('./config/passport') (passport);
//passport middleware
app.use(passport.initialize());
app.use(passport.session())
//connect flash
app.use(flash());
//global variables
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(port,()=>{
  console.log('Server Started at port 3000!');
})
