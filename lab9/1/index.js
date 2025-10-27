// index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// เพิ่มใช้งานไฟล์
const conn = require('./database.js');

// static resourse & template engine
// static resourse
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');
// For parsing form data
app.use(express.urlencoded({ extended: true }));

// routing 

app.get('/', async function (req, res) {
    // สร้างเมนูสำหรับใช้งาน path ต่างๆ
    res.send(`
        <h2>67070125 Lab 9/1 : Template Engine and Work with Database</h2>
        <ul>
            <li><a href="/createuser">Create User</a></li>
            <li><a href="/showdata">Show Users Data</a></li>
        </ul>
    `);

});

app.get('/showdata', async (req, res) => {

    try {
        const [result] = await conn.execute('SELECT * FROM users');
        console.log(result);
        // Render EJS template with data
        res.render('student_views', { data: result });
    } catch (error) {
        console.error('Error :', error);
        res.status(500).send('An error occurred.');
    }
});

app.get('/createuser', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get('/formget', async (req, res) => {
    let formdata = {
        username: req.query.username,
        password: req.query.password,
        email: req.query.email,
        firstname: req.query.fname,
        lastname: req.query.lname,
        age: req.query.age,
        address: req.query.address,
        phone: req.query.phone
    };

    let sqlc = `INSERT INTO users (username, password, email, firstname, lastname, age, address, phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    let values = [
        formdata.username,
        formdata.password,
        formdata.email,
        formdata.firstname,
        formdata.lastname,
        formdata.age,
        formdata.address,
        formdata.phone
    ];
    console.log(sqlc, values);

    try {
        const [result] = await conn.execute(sqlc, values);  
        res.redirect('/');

    } catch (error) {
        console.error('Error inserting item:', error);
        res.status(500).send('Error inserting item');
    }
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 