const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.gs9eqxz.mongodb.net/');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error"));

db.once('open', function(){
    console.log("database connected");
});
