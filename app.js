//jshint esversion:6

const exp = require('express');
const ejs = require("ejs");

const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));


app.get("/", function(req, res){

  res.render("home");
});

app.listen(3000, function(){
  console.log("listening on 3000");
});
