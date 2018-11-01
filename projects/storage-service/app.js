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

function saveBusiness(details) {
  const query = client.query(`INSERT INTO unit_providers (company_name,contact_person_name,telephone_number,email) 
  VALUES ('${details.companyName}','${details.contactPersonName}','${details.telephone}','${details.email}')`);
  return query;
}

function getAllBusinesses() {
  const businesses = client.query(`SELECT company_name FROM unit_providers;`);
  return businesses;
}
function getBusinessId(details) {
  const data = client.query(`SELECT id FROM unit_providers WHERE company_name = '${details.companyIdName}'`);
  companyId = data.rows[0].id;
  return companyId;
}
function saveLocation(details, businessId) {
  const query = await client.query(`INSERT INTO unit_locations (address_line1, address_line2, city_or_town, zip_code, provider_id) 
      VALUES ('${details.addressLine1}','${details.addressLine2}','${details.cityOrTown}','${details.zipCode}','${businessId}')`);
  return query;
}
function getAllLocations() {
  var locations = client.query(`SELECT * FROM unit_locations;`);
  return locations;
}
function fetchLocationId(details) {
  var loc = details.location.split(', ')
  var data = client.query('SELECT id FROM unit_locations WHERE address_line1=$1 AND address_line2=$2 AND city_or_town=$3 AND zip_code=$4', [loc[0], loc[1], loc[2], loc[3]]);
  return data.rows[0].id;
}
function saveBlock(details, locId) {
  const query = client.query(`INSERT INTO unit_blocks (block_name,location_id) 
  VALUES ('${details.blockName}','${locId}')`);
  return query;
}
function getAllBlocks() {
  const blocks = client.query(`SELECT id,block_name FROM unit_blocks;`);
  return blocks.rows
}
app.get('/blocks', async function (req, res) {
  var blocks = await getAllBlocks();
  if (blocks) {
    res.send(blocks).status(201).end();
  } else {
    res.status(500).end();
  }
});

function savaTypes(unitType, length, height, width) {
  const query = client.query(`INSERT INTO unit_types (type,unit_length,unit_height,unit_width) 
  VALUES ($1,$2,$3,$4)`, [unitType, length, height, width]);
  return query;
}
function saveUnits(unitName, blockId, typeId) {
  const query = client.query(`INSERT INTO units ( name,block_id,type_id) 
  VALUES ($1,$2,$3)`, [unitName, blockId, typeId]);
  return query;
}
function getAllTypesOfUnits() {
  const unitTypes = client.query(`SELECT * FROM unit_types;`);
  return unitTypes.rows;
}

app.post('/business-details', function (req, res) {
  try {
    await saveBusiness(req.body);
    res.sendStatus(201).end()
  } catch (error) {
    res.sendStatus(500).end()
  }
});

app.get('/businesses', async function (req, res) {
  var businesses = await getAllBusinesses();
  if (businesses) {
    res.send(businesses.rows).status(201).end();
  } else {
    res.status(500).end();
  }
});

app.post('/location', async function (req, res) {
  try {
    businessId = await getBusinessId(req.body);
    await saveLocation(req.body, businessId);
    res.send(201).end()
  } catch (error) {
    res.send(500).end()
  }
});

app.get('/locations', async function (req, res) {
  const locations = await getAllLocations();
  if (locations) {
    res.send(locations.rows).status(201).end();
  } else {
    res.status(500).end();
  }
});

app.post('/block-details', async function (req, res) {
  var details = req.body;
  try {
    const locationId = await fetchLocationId();
    await saveBlock(details, locationId);
    res.send(201).end()
  } catch (error) {
    res.sendStatus(500)
  }
});

app.post('/save-type', async function (req, res) {
  var details = req.body;
  try {
    await savaTypes(details.unitType, details.length, details.height, details.width)
    res.sendStatus(201).end()
  } catch (error) {
    res.sendStatus(500)
  }

});

app.get('/unit-types', async function (req, res) {
  var allTypesOfUnits = await getAllTypesOfUnits();
  if (allTypesOfUnits) {
    res.send(allTypesOfUnits).status(201).end();
  } else {
    res.status(500).end();
  }
});

app.post('/save-unit', async function (req, res) {
  var details = req.body;
  try {
    await saveUnits(details.unitName, details.block[0], details.unitType[0]);
    res.sendStatus(201).end()
  } catch (error) {
    res.sendStatus(500)
  }
});

app.listen(3001)