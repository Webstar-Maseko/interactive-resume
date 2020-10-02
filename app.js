//jshint esversion:6
require("dotenv").config();
const exp = require('express');
const ejs = require("ejs");
const bp = require("body-parser");


const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));


app.get("/", function(req, res){
    res.render("home.ejs");

});
app.post("", function(req,res){
  console.log("posting");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on 3000");
});
