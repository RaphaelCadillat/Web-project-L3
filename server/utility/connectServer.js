const {Client} = require('pg');

const config = {
    user: 'RaphaelCadillat_demo_db_connection',
    host: 'db.bit.io',
    database: 'bitdotio',
    password: '3Et9Z_mcVkzWpzFhaKAsAxcMxqZN8',
    port: 5432
}

const getPgClient = () =>  new Client(config);

module.exports = getPgClient;