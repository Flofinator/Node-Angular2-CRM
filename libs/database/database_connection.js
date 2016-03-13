
var mysql      = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: config.DB_HOST,
    user: config.DB_USER,
    password : config.DB_PASSWORD,
    port : config.DB_PORT, //port mysql
    database:config.DB_NAME
});

pool.type_of_database = "mysql";
pool.getConnection(function(err, connection) {
    try {
            connection.release();
        } catch(e) {console.log('error connecting: ' + err.stack)}
});


module.exports = pool;