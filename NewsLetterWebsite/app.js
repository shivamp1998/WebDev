//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
app.use(express.static("public"));
app.listen(1337,()=>{
  console.log("Server Started!");
});
app.get('/',function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.post("/failure.html",function(req,res){
  res.redirect("/");
});
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
   const name = req.body.firstName;
   const email = req.body.email;
   const data = {
     members: [
       {
         email_address: email,
         status: "subscribed",
         merge_fields: {
           FNAME: name,
         }
       }
     ]
   };
   var jsonData = JSON.stringify(data);
   const url = "https://us1.api.mailchimp.com/3.0/lists/deb8232eba";
   const options = {
     method: "POST",
     auth: "shivam:6f9d8fe00487e13b542f6bc6533d282b-us1",
   };
   const request = https.request(url,options,function(response){
    if(response.statusCode == 200){
      res.sendFile(__dirname + "/success.html");
    }else{
      res.sendFile(__dirname + "/failure.html");
    }
     response.on("data",function(data){
       console.log(JSON.parse(data));
     });
   });

   request.write(jsonData);
   request.end();
});

//6f9d8fe00487e13b542f6bc6533d282b-us1
//deb8232eba
