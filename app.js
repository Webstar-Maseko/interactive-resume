//jshint esversion:6
require("dotenv").config();
const exp = require('express');
const ejs = require("ejs");
const request = require("request");

const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));


app.get("/", function(req, res){

request(process.env.APIKEY, function(error, response, body){
  if(!error){
    let data = JSON.parse(body);
    let articles = data.articles;
    res.render("home.ejs", {articles:articles});
  }
  else{
    console.log(error);
    res.send("bad request");
  }
});

});

app.listen(process.env.PORT || 3000, function(){
  console.log("listening on 3000");
});
