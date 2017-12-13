const express = require("express");
var app = express();
const request = require('request');



var client = {
    consumer_key: "4ZgxsRYoGsQViRpQcmD5uSQaY",
    consumer_secret: "H0Dqc6IemwM1Gfp40OpiI6UGMuhRiEjbCVNylXXlGjvofPN332",
    token: "707129151417880576-cUWhMrvj0EsyMWA5kDBa0YBxHQRbmqg",
    token_secret: "my59qAm4i12B23BiMJf2vjwszyOj0sKWsqD0Gte9E5PWr"
};

var access = {
    url: "https://api.twitter.com/1.1/statuses/update.json",
    oauth: client,
    qs: { status: "yellow"}
};

request.post(access,
    function (error, res, body) {
        console.log("status code:", res.statusCode);
        console.log("response:", res.body);
        if (error) {
            console.log(error);
        }
    }
);

app.get("/", function (req, res) {
    res.send("hello world!")
}); 

app.listen(3000, () => console.log("ya spana"));