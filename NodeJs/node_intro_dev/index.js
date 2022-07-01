const express = require('express');
const app = express();

app.get('/',(req,res,next) => {
    res.send({message: "hello"});
})
app.get('/hello',(req,res,next)=>{
    res.send({success: true})
})

app.listen(1000,() => {
    console.log('server started at port 1000');
})