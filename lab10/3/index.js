const express = require("express");
const path = require("path");
const port = 3000;

const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('order.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});


// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');


// routing path
app.get('/', function (req, res) {
    const query = 'SELECT * FROM orders ';
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.render('home', { data: rows });
    });
});

app.get('/formget', function (req, res) {
    // let formdata = {
    //     id: req.query.id,
    //     fname: req.query.fname,
    //     title: req.query.title,
    //     phone: req.query.phone,
    //     email: req.query.email
    // };

    const { customer, product, address, phone } = req.query;

    db.get('SELECT MAX(ID) as maxId FROM orders', (err, row) => {
        if (err) {
            return console.error('Error fetching max ID:', err.message);
        }
        const newId = (row && row.maxId ? row.maxId : 0) + 1;
        let sql = `INSERT INTO orders (ID, customer_name, product_name, address, phone, status)
                   VALUES (${newId}, '${customer}', '${product}', '${address}', '${phone}', 'รอดำเนินการ')`;
        // console.log(sql);
        db.run(sql, (err) => {
            if (err) {
                return console.error('Error inserting data:', err.message);
            }
            console.log('Data inserted successful');
            res.redirect('/');
        });
    });
})

app.get('/update', function (req, res) {
    const { id, status } = req.query;
    let sql = `UPDATE orders SET status='${status}' WHERE ID=${id}`;
    db.run(sql, (err) => {
        if (err) {
            return console.error('Error updating data:', err.message);
        }
        console.log('Data updated successful');
        res.redirect('/');
    });
});

// Starting the server
app.listen(port, () => {
    console.log("Server started.");
});