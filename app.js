//jshint esversion:6
require("dotenv").config();
const exp = require('express');
const ejs = require("ejs");
const bp = require("body-parser");
const request = require("request");
const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: process.env.APIKEY, domain: process.env.DOMAIN});

const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));
app.use(bp.urlencoded({
  extended: true
}));



app.get("/", function(req, res) {
  res.render("home.ejs");

});
app.post("/", function(req, res) {
  const data = {
    from: req.body.email,
    to: "webstarsiyabpnga@gmail.com" ,
    subject: req.body.subject,
    text: req.body.message
  };

  mg.messages().send(data, function(err, body) {
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
