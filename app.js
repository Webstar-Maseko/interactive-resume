//jshint esversion:6
require("dotenv").config();
const exp = require('express');
const ejs = require("ejs");
const bp = require("body-parser");
const nodemailer = require("nodemailer");


const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));
app.use(bp.urlencoded({extended:true}));

const transport = nodemailer.createTransport({
  host:"in-v3.mailjet.com",
  port: 465,
  secure: true,
  auth:{
    user: 'e7a5fdb18d9c9535ba7047ccba88cfee',
    pass: "4b134ef7658254e0c275c65342aa212b"
  }
});


app.get("/", function(req, res){
    res.render("home.ejs");

});
app.post("/", function(req,res){

  transport.sendMail({
    from: req.body.email,
    to: "webstarsiyabonga@gmail.com",
    subject: "resume contact",
    text:req.body.message
  },function(err, data){
    if(err){
      console.log("error occcured");
    }
    else{
      console.log("message went through");
    }
  });

});


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on 3000");
});
