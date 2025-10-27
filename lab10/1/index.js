const express = require("express");
const path = require("path");
const { title } = require("process");
const port = 3000;

const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('userdata.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

app.use(express.static('public'));
// Set EJS as a template engine
app.set("view engine", "ejs");

// routing path
app.get('/', function (req, res) {
    const query = 'SELECT * FROM users';
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.render('home', { data: rows });
    });
});

app.get('/detail', function (req, res) {
    const id = req.query.id;
    console.log(id);
    const sql = `SELECT * FROM users where id = ${id}`;
    console.log(sql);
    db.all(sql, (err, row) => {
        if (err) {
            console.log(err.message);
        }
        console.log(row);
        res.render('profile', { data: row });
    });
});

// Starting the server
app.listen(port, () => {
    console.log("Server started.");
});