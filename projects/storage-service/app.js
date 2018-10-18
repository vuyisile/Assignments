var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var pg = require('pg')
const connectionString = "postgres://skywalker:max121xam@localhost:5432/storage_service"

const client = new pg.Client(connectionString);
client.connect();


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/business-details', function (req, res) {
  console.log('request', req.body);
  var details =req.body
  const query = client.query(`INSERT INTO unit_providers (company_name,contact_person_name,telephone_number,email) 
  VALUES ('${details.companyName}','${details.contactPersonName}','${details.telephone}','${details.email}')`);
  res.send(201).end()
});


app.post('/block-details', function (req, res) {
  console.log('request', req.body);
  
  const query = client.query(`INSERT INTO unit_blocks (name,block_id,type_id) 
  VALUES ('${details.name}','${details.telephone}','${details.email}')`);
  res.send(201).end()
});

app.post('/unit-details', function (req, res) {
  console.log('request', req.body);
  const query = client.query(`INSERT INTO units (name,telephone_number,email) 
  VALUES ('${details.name}','${details.telephone}','${details.email}')`);
  res.send(201).end()
});
 
app.listen(3001)