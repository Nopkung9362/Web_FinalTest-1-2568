const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('todolist.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.redirect('show');
});

app.get("/show", (req, res) => {
    const endpoint = 'http://localhost:3000/1';
    fetch(endpoint)
        .then(response => response.json())
        .then(empl => {
            console.log(empl);
            res.render('show', { data: empl });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/1', (req, res) => {
    const query = `SELECT * FROM todo `;
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));       
    });
});

app.get('/get', function (req, res) {
let sql = `INSERT INTO todo(Title,Description,Deadline,status) 
           VALUES (?,?,?,?) `;
    value = [req.query.title , req.query.description,req.query.deadline,0]
db.run(sql, value,function(err) {
 if (err) {
   return console.log(err.message);
 }

 console.log(`A row has been inserted`);
  res.redirect('/show');
});

})

app.get("/goAdd", (req, res) => {
  res.render('add');
});


app.listen(port, () => {
  console.log(`Starting server at port ${port}`);
});