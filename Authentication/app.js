const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
//mongoose connect
mongoose.connect('mongodb://localhost:27017/authapp',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Mongodb connected'))
.catch((err)=> console.log(err));
//ejs
app.use(expressLayout);
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));


//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3000,()=>{
  console.log('Server Started at port 3000!');
})
