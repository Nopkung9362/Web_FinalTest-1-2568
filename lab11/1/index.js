const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// // Connect to SQLite database
// let db = new sqlite3.Database('your-db-filename.db', (err) => {    
//   if (err) {
//       return console.error(err.message);
//   }
//   console.log('Connected to the SQlite database.');
// });


// static resourse & templating engine
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    //   res.send("Hello! REST API");
    res.redirect('/detail');
});

app.get("/detail", (req, res) => {
    // movies/year/country 
    // year ระหว่าง 1942-2021  
    // country เช่น thailand india
    const endpoint = 'http://webdev.it.kmitl.ac.th:8000/restaurant';    
    fetch(endpoint)
        .then(response => response.json())
        .then(menus => {
            // console.log(menus);
            res.render('show', {data : menus});          
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/detail/:detail_id", (req, res) => {
    console.log(req.params);
    const id = req.params.detail_id; // parameter
    console.log(id);
    const endpoint = 'http://webdev.it.kmitl.ac.th:8000/detail/' + id;    
    fetch(endpoint)
        .then(response => response.json())
        .then(detail => {
            // Log only the restaurant name and id for debugging
            // console.log(`Restaurant ID: ${detail.product_id}, Name: ${detail.name}`);
            res.render('detail', {data : detail});  
        })
        .catch(error => {
            console.log(error);
        });
});



app.listen(port, () => {
  console.log(`Starting server at port ${port}`);
});