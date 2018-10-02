CREATE TABLE IF NOT EXISTS unit_providers (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    telephone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);CREATE TABLE IF NOT EXISTS unit_locations (
    id serial PRIMARY KEY,
    address VARCHAR(255) NOT NULL,   
    provider_id INT REFERENCES unit_providers(id) NOT NULL
);CREATE TABLE IF NOT EXISTS unit_blocks (
    id serial PRIMARY KEY,
    block_name VARCHAR(255) NOT NULL,
    location_id INT REFERENCES unit_locations(id) NOT NULL
);CREATE TABLE IF NOT EXISTS units (
    id serial PRIMARY KEY,
    name VARCHAR(225) NOT NULL,
    block_id INT REFERENCES unit_blocks(id),
    type_id INT REFERENCES unit_types(id)
);CREATE TABLE IF NOT EXISTS unit_types (
    id serial PRIMARY KEY,
    name varchar(225) NOT NULL,
    unit_length INT NOT NULL,
    unit_width INT NOT NULL ,
    unit_height INT NOT NULL
);CREATE TABLE IF NOT EXISTS customers (
    id serial PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    telephone VARCHAR(100),
    unit_id INT REFERENCES units(id) NOT NULL
);CREATE TABLE IF NOT EXISTS customer_unit_providers (
    id serial PRIMARY KEY,
    customer_id INT REFERENCES customers(id) NOT NULL,
    unit_provider_id INT REFERENCES unit_providers(id) NOT NULL
);


-- inserting into unit_providers table

INSERT INTO unit_providers (name,telephone_number,email)
VALUES ('space cube','01129284569','www.spacecube@outlook.com' );

INSERT INTO unit_providers (name,telephone_number,email)
VALUES ('local units','01124682884','www.localunits@gmail.com');

INSERT INTO unit_providers (name,telephone_number,email)
VALUES ('vacuume','0123336483','www.vacuume@linkin.com');


-- selecting data from unit_providers table

SELECT * FROM unit_providers;


