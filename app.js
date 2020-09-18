//jshint esversion:6

const exp = require('express');
const ejs = require("ejs");
const request = require("request");

const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));


app.get("/", function(req, res){

request("https://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=1af0effb134140ff8f778fcf3905319f", function(error, response, body){
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

app.listen(3000, function(){
  console.log("listening on 3000");
});
