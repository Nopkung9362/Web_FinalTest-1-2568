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

app.get('/', function (req, res) {
    // สร้างเมนูสำหรับใช้งาน path ต่างๆ
    res.send(`
        <h2>MySQL Database & Template Engine</h2>
        <ul>
            <li><a href="/showdata">Show data</a></li>
            <li><a href="/form">Show form</a></li>
        </ul>
    `);             
});

app.get('/showdata', async (req, res) => {

    try {
        const [result] = await conn.execute('SELECT * FROM instructor');
        console.log(result);
        // Render EJS template with data
        res.render('show', { data: result });
    } catch (error) {
        console.error('Error :', error);
        res.status(500).send('An error occurred.');
    }
});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

// 

app.get('/formget', async (req, res) => {
    let formdata = {
        id: req.query.id,
        name: req.query.name,
        dept_name: req.query.dept_name,
        salary: req.query.salary
    };

    let sqlc = `INSERT INTO instructor (ID,name,dept_name,salary)
    VALUES('${formdata.id}', '${formdata.name}', '${formdata.dept_name}', ${formdata.salary})`;
    console.log(sqlc);

    try {
        const [result] = await conn.execute(sqlc);
        res.redirect('/'); 
    } catch (error) {
        console.error('Error inserting item:', error);
        res.status(500).send('Error inserting item');
    }
});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 