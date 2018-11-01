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
  var details = req.body;
  var loc = details.location.split(', ')
  try {
    const getCompanyId = await client.query('SELECT id FROM unit_locations WHERE address_line1=$1 AND address_line2=$2 AND city_or_town=$3 AND zip_code=$4', [loc[0], loc[1], loc[2], loc[3]]);
    var companyId = getCompanyId.rows[0].id;
    const query = client.query(`INSERT INTO unit_blocks (block_name,location_id) 
  VALUES ('${details.blockName}','${companyId}')`);

    res.send(201).end()
  } catch (error) {
    res.sendStatus(500)
  }
});
app.get('/blocks', async function (req, res) {
  const locations = await client.query(`SELECT id,block_name FROM unit_blocks;`);
  if (locations) {
    res.send(locations.rows).status(201).end();
  } else {
    res.status(500).end();
  }
});

// CREATE TABLE IF NOT EXISTS units (
//   id serial PRIMARY KEY,
//   name VARCHAR(225) NOT NULL,
//   type_id INT REFERENCES unit_types(id)
// );

// CREATE TABLE IF NOT EXISTS unit_types (
//   id serial PRIMARY KEY,
//   type varchar(225) NOT NULL,
//   unit_length INT NOT NULL,
//   unit_width INT NOT NULL ,
//   unit_height INT NOT NULL,
//   block_id INT REFERENCES unit_blocks(id)
// );

app.post('/unit-details', async function (req, res) {
  var details = req.body;
  const blockId = details.block[0];
  try {
    const query = await client.query(`INSERT INTO unit_types (type,unit_length,unit_height,unit_width,block_id) 
    VALUES ($1,$2,$3,$4)`, [details.unitType, details.length, details.height, details.width, blockId]);
    res.sendStatus(201).end()
  } catch (error) {
    res.sendStatus(500)
  }

  // const query = client.query(`INSERT INTO units (name,type_id) 
  // VALUES ($1,$2)`, [details.unitName,typeId]);

});

app.listen(3001)