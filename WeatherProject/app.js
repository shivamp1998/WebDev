//jshint esversion:6
const express = require("express");
const https = require("https");
const app = express();
app.get("/",function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=e094d5ad457bfd13c89a7d38f718ad1a&units=metric";
  https.get(url,function(request){
    request.on("data",function(data){
      const WeatherData = JSON.parse(data);
      res.write("<h1>The current Weather in Mumbai is "+WeatherData.main.temp+" Degreess Celcius</h1>");
      res.write("<p>The Weather Description of Mumbai is "+WeatherData.weather[0].description+" </p>");
    });
  });
});
app.listen(3000,function(){
  console.log("Started!");
});
