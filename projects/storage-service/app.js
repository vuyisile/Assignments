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
  var details = req.body
  const query = client.query(`INSERT INTO unit_providers (company_name,contact_person_name,telephone_number,email) 
  VALUES ('${details.companyName}','${details.contactPersonName}','${details.telephone}','${details.email}')`);
  res.sendStatus(201).end()
});
app.get('/businesses', async function (req, res) {
  const companies = await client.query(`SELECT company_name FROM unit_providers;`);
  if (companies) {
    res.send(companies.rows).status(201).end();
  } else {
    res.status(500).end();
  }
});



app.post('/location', async function (req, res) {
  var details = req.body
  try {
    const getCompanyId = await client.query(`SELECT id FROM unit_providers WHERE company_name = '${details.companyIdName}'`);
    companyId = getCompanyId.rows[0].id;
    const query = await client.query(`INSERT INTO unit_locations (address_line1, address_line2, city_or_town, zip_code, provider_id) 
      VALUES ('${details.addressLine1}','${details.addressLine2}','${details.cityOrTown}','${details.zipCode}','${companyId}')`);
    res.send(201).end()
  } catch (error) {
    res.send(500).end()
  }
});

app.get('/locations', async function (req, res) {
  const locations = await client.query(`SELECT * FROM unit_locations;`);
  if (locations) {
    res.send(locations.rows).status(201).end();
  } else {
    res.status(500).end();
  }
});


app.post('/block-details', async function (req, res) {
  var details =  req.body;
  var loc = details.location.split(',')
  try {
    const getCompanyId = await client.query('SELECT id FROM unit_locations WHERE address_line1 = $1 AND address_line2 = $2 AND city_or_town = $3 AND zip_code = $4',[details[0],details[1],details[2],details[3]]);
    var  companyId = getCompanyId.rows[0].id;
    console.log('comp',companyId);
    
    // const query = client.query(`INSERT INTO unit_blocks (block_name,location_id) 
    // VALUES ('${details.name}','${location.id}')`);
    res.send(201).end()
  } catch (error) {
    res.send(500).end()
  }
});

app.post('/unit-details', function (req, res) {
  console.log('request', req.body);
  const query = client.query(`INSERT INTO units () 
  VALUES (`);
  res.send(201).end()
});

app.listen(3001)