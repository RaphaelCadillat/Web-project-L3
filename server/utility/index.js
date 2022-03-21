const getPGClient = require("./connectServer");

const tryToConnect = () => {
    const newClient = getPGClient();
    newClient.connect();

    return newClient;
};

module.exports = {
    tryToConnect
}
