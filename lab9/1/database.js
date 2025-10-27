// database.js
const mysql = require('mysql2/promise'); 

const conn = mysql.createPool({
    host: 'webdev.it.kmitl.ac.th',
    user: 's67070125',
    password: 'NE81WB29RC66B', 
    database: 's67070125',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = conn;