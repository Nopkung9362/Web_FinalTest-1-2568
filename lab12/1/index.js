const express = require('express');
const cookieParser = require('cookie-parser');
const sqlite3 = require('sqlite3').verbose();
const port = 3000;

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('customers.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

// static resourse & templating engine
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(cookieParser());

app.get('/', (req, res) => {
    let dataToSend;
    if (req.query.saved === 'true') {
        // สร้าง object ข้อมูลว่างเปล่าเพื่อเคลียร์ฟอร์ม
        dataToSend = {
            CustomerId: '',
            FirstName: '',
            LastName: '',
            Address: '',
            Email: '',
            Phone: ''
        };
        res.render('info', { data: dataToSend });
    } else {
        const query = 'SELECT * FROM customers ORDER BY RANDOM() LIMIT 1;';
        db.get(query, (err, row) => {
            if (err) {
                console.log(err.message);
            }
            console.log(row);
            // ข้อมูลที่สุ่มมา
            dataToSend = row; 
            res.render('info', { data: dataToSend });
        });
    }

    // parameters: req.cookies.cookie_name
    let visits = parseInt(req.cookies.visits) || 0;
    visits++;
    // set your cookie name
    res.cookie('visits', visits, { maxAge: 86400000 });
    // Set cookie expiration 1000*60*60*24 (1 day)

    // Clearing the cookie
    // res.clearCookie('visits'); 
    console.log(`Number of visits: ${visits}`);
    
});

app.get('/savedata', (req, res) => {
    const CustomerId = req.query.CustomerId;
    res.cookie('CustomerId', CustomerId, { maxAge: 86400000 });
    // เปลี่ยน redirect ไปพร้อม query parameter
    res.redirect('/?saved=true');
});

app.get('/showdata', (req, res) => {
    const CustomerId = req.cookies.CustomerId;
    if (CustomerId) {
        const query = `SELECT * FROM customers WHERE CustomerId=${CustomerId};`;
        db.get(query, (err, row) => {
            if (err) {
                console.log(err.message);
            }
            console.log(row);
            res.render('info', { data: row });
        });
    } else {
        res.redirect('/?saved=true');
    }
});

app.get('/deletedata', (req, res) => {
    // Clear the cookie และลบข้อมูลใน Form
    res.clearCookie('CustomerId');
    res.clearCookie('visits');
    res.redirect('/?saved=true');
});


app.listen(port, () => {
    console.log(`Starting node.js at port ${port}`);
});