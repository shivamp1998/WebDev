const express = require("express");
const app = express();
const crypto = require('crypto');


app.get("/", (req, res, next) => {
  crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    res.end("<h1> Hello World </h1>");
  })
});

app.get("/fast", (req, res, next) => {
  res.send("<h1> This was Fast </h1>");
});

app.listen(3000, () => {
  console.log("connected at port 3000");
});
