const utility = require("../utility/index")

const DATABASE_NAME = "RaphaelCadillat/DinoCollec";
const TABLE_NAME = "dinos";

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;

const getCount= async () => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT count(*) FROM ${TABLE_PATH};`

    try {
        const pgResp = await client.query(sqlQuery)
        console.log('--- ' + pgResp.rows[0].count);
        client.end();
        return pgResp.rows[0].count;
    } catch (err) {
        console.log(err.stack)
        client.end();
        return null;
    }
};
const create = async (id_dinos,id_users, name,carac ,type , size) => {
    const client = utility.tryToConnect();

    const sqlQuery = `INSERT INTO ${TABLE_PATH} VALUES (${id_dinos},'${name}',${id_users},'${type}',${size},'${carac}');`

    try {
        const pgResp = await client.query(sqlQuery)
        console.log(pgResp.rows[0]);
        client.end();
        return true;
    } catch (err) {
        console.log(err.stack)
        client.end();
        return false;
    }
}


module.exports = {
    getCount: getCount,
    create : create
}