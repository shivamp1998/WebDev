const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

//ejs
app.use(expressLayout);
app.set('view engine','ejs');

//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3000,()=>{
  console.log('Server Started at port 3000!');
})
