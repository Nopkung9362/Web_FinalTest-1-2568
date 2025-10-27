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
    res.sendFile(path.join(__dirname, "/public/form.html"));
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


app.get('/formget', async (req, res) => {
    try {
        let formdata = {
            user : req.query.user,
            password: req.query.password,
        };

        let sqlc = `Select username , email , password from users where username = ? or email = ?`;
        let values = [formdata.user, formdata.user];
        const [users] = await conn.execute(sqlc, values);

        if (users.length === 0) {
            return res.send('<script>alert("No username or email found."); window.location.href="/";</script>');
        }
        
        // Check if password is correct
        const user = users.find(u => u.password === formdata.password);
        if (!user) {
            return res.send('<script>alert("Incorrect password."); window.location.href="/";</script>');
        }
        res.send('<script>alert("Login successful!"); window.location.href="/showdata";</script>');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred.');
    }
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 