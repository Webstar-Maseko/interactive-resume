//jshint esversion:6
require("dotenv").config();
const exp = require('express');
const ejs = require("ejs");
const bp = require("body-parser");
const request = require("request");
const nodemailer = require("nodemailer");


const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));
app.use(bp.urlencoded({
  extended: true
}));

const transport = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: 'apikey',
    pass: process.env.APIKEY
  }
});


app.get("/", function(req, res) {
  res.render("home.ejs");

});
app.post("/", function(req, res) {

  transport.sendMail({
    from: req.body.email,
    to: "webstarsiyabonga@gmail.com",
    subject: req.body.subject,
    text: req.body.message
  }, function(err, data) {
    let resp;
    if (err) {
      resp = err.response;
    } else {
      resp = "Message sent successfully, I'll be in touch";
    }
    let attrib;
    request('https://sv443.net/jokeapi/v2/joke/Pun?blacklistFlags=racist,sexist&type=single', function(error, response, body) {
      if (!error) {
        attrib = JSON.parse(body);
      } else {
        attrib = error;
      }
      res.render("close", {
        resp: resp,
        attrib: attrib
      });
    });


  });

});


app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});
