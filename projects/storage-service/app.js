var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var pg = require('pg')
const ref = require("./ref-functions/functions");
const hash = require('js-sha512');
const crypto = require('./ref-functions/crypto')



const connectionString = "postgres://skywalker:max121xam@localhost:5432/storage_service"

const client = new pg.Client(connectionString);
client.connect();


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// ____________express-code________________________



app.post('/business', async function (req, res) {
  try {
    await ref.saveBusiness(req.body);
    res.sendStatus(201).end()
  } catch (error) {
    res.sendStatus(500).end()
  }
});

app.get('/businesses', async function (req, res) {
  var businesses = await ref.getAllBusinesses();
  if (businesses) {
    res.send(businesses.rows).status(201).end();
  } else {
    res.status(500).end();
  }
});

app.post('/location', async function (req, res) {
  try {
    businessId = await ref.getBusinessId(req.body);
    await ref.saveLocation(req.body, businessId);
    res.sendStatus(201).end()
  } catch (error) {
    console.log('error', error)
    res.sendStatus(500).end()
  }
});

app.get('/locations', async function (req, res) {
  const locations = await ref.getAllLocations();
  if (locations) {
    res.send(locations.rows).status(201).end();
  } else {
    res.statusStatus(500).end();
  }
});

app.post('/block', async function (req, res) {
  var details = req.body;
  try {
    const locationId = await ref.fetchLocationId(details);
    await ref.saveBlock(details, locationId);
    res.sendStatus(201).end()
  } catch (error) {
    console.log('error', error)
    res.sendStatus(500)
  }
});
app.get('/blocks', async function (req, res) {
  var blocks = await ref.getAllBlocks();
  if (blocks) {
    res.send(blocks).status(201).end();
  } else {
    res.statusStatus(500).end();
  }
});

app.post('/type', async function (req, res) {
  var details = req.body;
  try {
    await ref.saveTypes(details.unitType, details.length, details.height, details.width)
    res.sendStatus(201).end()
  } catch (error) {
    console.log('error', error)
    res.sendStatus(500)
  }

});

app.get('/types', async function (req, res) {
  var allTypesOfUnits = await ref.getAllTypesOfUnits();
  if (allTypesOfUnits) {
    res.send(allTypesOfUnits).status(201).end();
  } else {
    res.statusStatus(500).end();
  }
});

app.post('/unit', async function (req, res) {
  var details = req.body;
  try {
    console.log('helper function', ref.saveUnits(details.unitName, details.block[0], details.unitType[0]));

    await ref.saveUnits(details.unitName, details.block[0], details.unitType[0]);
    res.sendStatus(201).end()
  } catch (error) {
    console.log('error', error)
    res.sendStatus(500)
  }
});

app.post('/signup', async function (req, res) {
  var details = req.body;
  try {
    var check = await ref.checkIfExits(details);
    if (check.status === false) {
      await ref.saveCustomer(details);
      res.sendStatus(201).end()
    }
    res.json({ message: 'email already in use' })
  } catch (error) {
    console.log('error', error)
    res.sendStatus(500)
  }
})

app.post('/login', async function (req, res) {
  var details = req.body;
  console.log('details',details.password)
  try {
    var check = await ref.checkIfExits(details);
    if(check.status === true){
      var verification = await crypto.verifyPassword(details.password,check.pswd)
      if(verification === true){
        console.log('You are now logged-In')
      }
    }
  } catch (error) {
    console.log('error :', error);
  }
})

app.listen(3001)