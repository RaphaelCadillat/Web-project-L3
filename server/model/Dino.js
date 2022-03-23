const utility = require("../utility/index")

const DATABASE_NAME = "RaphaelCadillat/DinoCollec";
const TABLE_NAME = "dinos";
const USER_NAME = "users"

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;
const USER_PATH =  `"${DATABASE_NAME}"."${USER_NAME}"`;

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

const getCountUser= async () => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT count(*) FROM ${USER_PATH};`

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

const deleteById = async id => {
    const client = utility.tryToConnect();

    const sqlQuery = `DELETE FROM ${TABLE_PATH} where id_dinos=${id};`;

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

const getById = async id => {
    const client = utility.tryToConnect();

    const sqlQuery = `SELECT * FROM ${TABLE_PATH} where id_users=${id};`;

    try {
        const pgResp = await client.query(sqlQuery)
        console.log(pgResp.rows[0]);
        client.end();

        return pgResp.rows;
    } catch (err) {
        console.log(err.stack)
        client.end();

        return { };
    }
}

const getConnect = async (name,password) => {
    const client = utility.tryToConnect();

    const sqlQuery = `SELECT id FROM ${USER_PATH} where name='${name}' and password='${password}';`;

    try {
        const pgResp = await client.query(sqlQuery)
        console.log(pgResp.rows[0]);
        client.end();

        return pgResp.rows[0];
    } catch (err) {
        console.log(err.stack)
        client.end();

        return { };
    }
}

const createUser = async (name,email,password,id_users) => {
    const client = utility.tryToConnect();

    const sqlQuery = `INSERT INTO ${TABLE_PATH} VALUES (${id_users},'${name}','${email}','${password}');`

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
    create : create,
    deleteById : deleteById,
    getById : getById,
    getConnect : getConnect,
    getCountUser,
    createUser
}