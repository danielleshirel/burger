
// Database Connections

const MySQL = require('mysql');

var connection = MySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgersDB",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});


module.exports = connection;


