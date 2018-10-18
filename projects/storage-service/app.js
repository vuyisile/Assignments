var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/business-details', function (req, res) {
  console.log('request', req.body);
  res.send(201).end()
});

app.post('/block-details', function (req, res) {
  console.log('request', req.body);
  res.send(201).end()
});

app.post('/unit-details', function (req, res) {
  console.log('request', req.body);
  res.send(201).end()
});
 
app.listen(3001)