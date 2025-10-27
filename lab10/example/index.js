const express = require("express");
const path = require("path");
const { title } = require("process");
const port = 3000;

const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('employees.db', (err) => {
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
  res.render('home');
})

app.get('/show', function (req, res) {
  const query = 'SELECT * FROM employees ';
  db.all(query, (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    console.log(rows);
    res.render('show', { data: rows });
  });
});

app.get('/delete', function (req, res) {
  // Deleting Data
  let id = req.query.id;
  let sql = `delete from employees where EmployeeId = ${id}`;
  console.log(sql);
   //specify the id of the row to be deleted
  //delete a row based on id
  db.run(sql, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) deleted.`);
    res.redirect('/show');
  });
})

app.get('/form', function (req, res) {
  res.render('form');
})

app.get('/formget', function (req, res) {
    // let formdata = {
    //     id: req.query.id,
    //     fname: req.query.fname,
    //     title: req.query.title,
    //     phone: req.query.phone,
    //     email: req.query.email
    // };

    const { id, fname, lname,title, phone, email } = req.query;
    //
    let sql = `INSERT INTO  Employees (EmployeeId, FirstName,LastName, Title, Phone, Email) 
               VALUES (${id}, '${fname}',  '${lname}','${title}', '${phone}','${email}')`;
    console.log(sql);
    db.run(sql, (err) => {
        if (err) {
            return console.error('Error inserting data:', err.message);
        }
        console.log('Data inserted successful');        
    });
    res.redirect('/show');
})

// Starting the server
app.listen(port, () => {
  console.log("Server started.");
});