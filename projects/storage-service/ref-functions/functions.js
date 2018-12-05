const hash = require('js-sha256');
var pg = require('pg')
const connectionString = "postgres://skywalker:max121xam@localhost:5432/storage_service"
const client = new pg.Client(connectionString);
client.connect();
const hashingHelper = require('./crypto')

//__________________________________ business __________________________________:
async function saveBusiness(details) {
    const query = await client.query(`INSERT INTO unit_providers (company_name,contact_person_name,telephone_number,email) 
    VALUES ('${details.companyName}','${details.contactPersonName}','${details.telephone}','${details.email}')`);
    return query;
}

async function getAllBusinesses() {
    const businesses = await client.query(`SELECT company_name FROM unit_providers;`);
    return businesses;
}
async function getBusinessId(details) {
    const data = await client.query(`SELECT id FROM unit_providers WHERE company_name = '${details.companyIdName}'`);
    companyId = data.rows[0].id;
    return companyId;
}

//__________________________________ Location __________________________________:
async function saveLocation(details, businessId) {
    const query = await client.query(`INSERT INTO unit_locations (address_line1, address_line2, city_or_town, zip_code, provider_id) 
        VALUES ('${details.addressLine1}','${details.addressLine2}','${details.cityOrTown}','${details.zipCode}','${businessId}')`);
    return query;
}
async function getAllLocations() {
    var locations = await client.query(`SELECT * FROM unit_locations;`);
    return locations;
}
async function fetchLocationId(details) {
    var loc = details.location.split(', ')
    var data = await client.query('SELECT id FROM unit_locations WHERE address_line1=$1 AND address_line2=$2 AND city_or_town=$3 AND zip_code=$4', [loc[0], loc[1], loc[2], loc[3]]);
    return data.rows[0].id;
}

// __________________________________ block __________________________________:
async function saveBlock(details, locId) {
    await client.query(`INSERT INTO unit_blocks (block_name,location_id) 
    VALUES ('${details.blockName}','${locId}')`);
    // return query;
}
async function getAllBlocks() {

    const blocks = await client.query(`SELECT id,block_name FROM unit_blocks;`);
    return blocks.rows
}

// __________________________________ unit_types __________________________________:
async function saveTypes(unitType, length, height, width) {

    const query = await client.query(`INSERT INTO unit_types (type,unit_length,unit_height,unit_width) 
    VALUES ($1,$2,$3,$4)`, [unitType, length, height, width]);
    return query;
}

async function getAllTypesOfUnits() {

    const unitTypes = await client.query(`SELECT * FROM unit_types;`);
    return unitTypes.rows;
}

// ___________________________________ Units ________________________________________:
async function saveUnits(unitName, blockId, typeId) {

    const query = await client.query(`INSERT INTO units ( name,block_id,type_id) 
    VALUES ($1,$2,$3)`, [unitName, blockId, typeId]);
    return query;
}
function cb(response) {
    console.log('response:', response)
}
//____________________________________customers_______________________________
async function saveCustomer(details) {
    var password = details.password
    var query = {};
    try {
        var encrypt = await hashingHelper.hashPassword(password)
        console.log('pswd:', encrypt);
        query = await client.query(`INSERT INTO customers (name, password, email, telephone) 
        VALUES ('${details.username}','${encrypt.hash}','${details.email}','${details.telephone}')`);
    } catch (error) {
        console.log('error!!', error)
    }

    return query;

}

async function checkIfExits(obj) {
    var status = true;
    const finder = await client.query(`SELECT email,password FROM customers WHERE email=$1`, [obj.email]);
    if (finder.rows.length === 0) {
        status = false;
    }
    console.log('user matching status',status,'\n user', {status, })
    return {status, pswd:finder.rows[0].password}
}

async function matchUser(obj) {
    var string = await hashingHelper.verifyPassword(obj.password,)
    // var status = true;
    const finder = await client.query(`SELECT email,password FROM customers WHERE email=$1 AND password=$1`, [obj.username, string]);
    // if (finder.rows.length === 0) {
    //     status = false;
    // }
    return status
}



module.exports = {
    fetchLocationId,
    saveTypes,
    saveBlock,
    saveBusiness,
    saveLocation,
    saveUnits,
    getAllBlocks,
    getAllBusinesses,
    getAllLocations,
    getAllTypesOfUnits,
    getBusinessId,
    saveCustomer,
    checkIfExits,
    matchUser

}