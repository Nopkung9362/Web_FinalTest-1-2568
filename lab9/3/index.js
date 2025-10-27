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

app.get('/', async (req, res) => {
    // สร้างเมนูสำหรับใช้งาน path ต่างๆ
    try {
        const [result] = await conn.execute('SELECT song_name AS song , artist_name AS artist , EXTRACT(YEAR from song_release_date) AS year , song_type AS type FROM artists INNER JOIN songs on artists.artist_id = songs.artist');
        console.log(result);
        // Render EJS template with data
        res.render('view_songs', { data: result });
    } catch (error) {
        console.error('Error :', error);
        res.status(500).send('An error occurred.');
    }

});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 