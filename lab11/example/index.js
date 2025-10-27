const express = require("express");
const path = require("path");
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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    //   res.send("Hello! REST API");
    res.redirect('/show');
});

app.get('/employees', (req, res) => {
    const query = 'SELECT * FROM employees; ';
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));
    });
});

app.get('/employees/:id', (req, res) => { // ex http://localhost:3000/employees/1
    const id = req.params.id // parameter
    const query = `SELECT * FROM employees WHERE EmployeeID= ${id}; `;
    db.each(query, (err, rows) => { // each มารายการเเดียว | all return array of rows ex {"EmployeeID":1,"FirstName":"Nancy","LastName":"Freehafer","EmailAddress":"nancy@northwindtraders.com","JobTitle":"Sales Representative","PrimaryPhone":"123-555-0100","SecondaryPhone":"123-555-0200","Title":"Ms.","Notes":"","Attachments":"NancyF.jpg"}
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));
    });
});

app.post('/employees', (req, res) => {
    // process nothing   
    res.send(`POST Add new employee ... completed.`)
});

app.put('/employees', (req, res) => {
    // process nothing   
    res.send(`PUT Add new employee ... completed.`)
});

app.delete('/employees', (req, res) => {
    // process nothing   
    res.send(`DELETE Add new employee ... completed.`)
});

// จาก Web Service ที่สร้างเอง
app.get("/show", (req, res) => {
    const endpoint = 'http://localhost:3000/employees';
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

// จาก Web Service ที่อื่น
app.get("/movies", (req, res) => {
    // movies/year/country 
    // year ระหว่าง 1942-2021  
    // country เช่น thailand india
    const endpoint = 'http://webdev.it.kmitl.ac.th:8000/movies/2019/india';    
    fetch(endpoint)
        .then(response => response.json())
        .then(mov => {
            console.log(mov);
            res.render('movies', { data: mov });      
        })
        .catch(error => {
            console.log(error);
        });
});

// title director castActors country release_year duration listed_in description 

// app.put('/employees/:id', (req, res) => {
//     // req.params.id
//     res.send(`PUT Update employee id : ${req.params.id} completed.`)
// });

// app.delete('/employees/:id', (req, res) => {
//     // req.params.id --> processes --> respond  res.*
//     const query = `DELETE * WHERE EmployeeID=''; `;
//     db.run(query, function (err) {
//         if (err) {
//             return console.error(err.message);
//         }
//         console.log(`a row deleted.`);
//         res.send(`Delete employee ... completed.`)
//     });
// });

app.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});