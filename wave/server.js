const request = require('request');
const express = require('express')
const app = express()
const qs = require('qs');


var appUsers = [];



const config = {
  consumerKey: "4ZgxsRYoGsQViRpQcmD5uSQaY",
  consumerSecret: "H0Dqc6IemwM1Gfp40OpiI6UGMuhRiEjbCVNylXXlGjvofPN332",
}

app.get('/authorize/twitter', (req, res) => {
  console.log("Requesting a refresh token from twitter");
  getRequestToken((err, data) => {
    if (err) {
      res.statusCode(500);
    }

    res.send("<a href='https://api.twitter.com/oauth/authorize?oauth_token=" + data.oauth_token + "'>Authorize Twitter</a>");
  });
});

app.get('/twitter/callback', (req, res) => {
  var tokenDetails = qs.parse(req.query);


  getAccessToken(tokenDetails.oauth_verifier, tokenDetails.oauth_token, (err, data) => {
    if (err) {
      console.log('error getting access token');
      res.send('Oh nooo! Something went wrong while giving access, please try again.');
    } else {

      users.push(data);

      console.log('the access token is: ', data);
      res.send('<h1>welcome to Wave:)</h1> <textarea></textarea><button>post</button>');
    }
  });
});

function postMessage(message) {
  const url = "https://api.twitter.com/1.1/statuses/update.json";

  var oauth = {
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: token,
    tokenSecret: tokenSecret
  };

  var options = {
    url: url,
    oauth: oauth,
    qs: { status: "Hello World" }
  };

  request.post(options,
    function (err, response, body) {
      console.log("http response code", response.statusCode);
      console.log("http response body", response.body);

      if (error) {
        console.log(error);
      }
    });
}

function getAccessToken(oauthVerifier, requestToken, callBack) {
  var oauth = {
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: requestToken
  };
  console.log("oauth = ", oauth);

  request.post({
    url: 'https://api.twitter.com/oauth/access_token',
    oauth: oauth,
    qs: { oauth_verifier: oauthVerifier }
  }, function (err, res, body) {
    console.log("body = ", body);
    if (err) {
      console.log(err);
      callBack(err);
    };


    var data = qs.parse(body);
    callBack(null, data);
  });

}


function getRequestToken(callBack) {
  var oauth = {
    callback: 'http://localhost:3001/twitter/callback'
    , consumer_key: config.consumerKey
    , consumer_secret: config.consumerSecret
  };

  request.post({
    url: 'https://api.twitter.com/oauth/request_token',
    oauth: oauth
  }, function (err, res, body) {
    if (err) {
      console.log(err);
      callBack(err);
      return;
    };

    var data = qs.parse(body);
    callBack(null, data);
  });

}



app.get('/', (req, res) => res.send("Hello World! \n welcome to status wave :) \n wanna post on twitter, first give use Autherization \n <a href='http://localhost:3001/authorize/twitter'>Go to the next page-></a>"));

app.listen(3001, () => console.log('The server is listening on port 3000!'))
  