//jshint esversion:6
require("dotenv").config();
const exp = require('express');
const ejs = require("ejs");
const bp = require("body-parser");
const request = require("request");
const mailgun = require("mailgun-js");
const twit = require("twit");
const mg = mailgun({apiKey: process.env.APIKEY, domain: process.env.DOMAIN});

const app = exp();
app.set("view engine", "ejs");
app.use(exp.static("Public"));
app.use(bp.urlencoded({
  extended: true
}));
//const query  = '(developer OR software) remote (context:66.961961812492148736 OR context:66.850073441055133696) -is:retweet -"business developer"';

let options = {
  url :"https://api.twitter.com/2/tweets/search/recent",
  method: "GET",
  headers:{
    Authorization: "Bearer " + process.env.TOKEN,
  },
  qs:{
    max_results:10,
    query : "(developer) learn (javascript OR NODEJS) -is:retweet",
    'tweet.fields': "created_at,context_annotations,entities",
    'expansions' : 'author_id',
    'user.fields': "created_at",

  },

};




app.get("/", function(req, res) {

  request(options, function(error, response, body){

    let attrib = JSON.parse(body) ;
    let data = attrib.data;
    res.render("home.ejs", {data:data});
  });

});
app.post("/", function(req, res) {
  const data = {
    from: req.body.email,
    to: "webstarsiyabonga@gmail.com",
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
