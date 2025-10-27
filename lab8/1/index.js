const express = require('express')
const app = express()
const port = 3000

const path = require('path');

// Without middleware
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/cats', function(req, res){
  res.sendFile(path.join(__dirname, '/public/cats.html'));
});

app.get('/dogs', function(req, res){
  res.sendFile(path.join(__dirname, '/public/dogs.html'));
});

app.get('/uhh', function(req, res){
  res.sendFile(path.join(__dirname, '/public/uhh.html'));
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})



// create directory 'public'
app.use(express.static('public'));
app.use(express.static('img'));


app.use((req, res, next) => {
      res.status(404).send('ขออภัย ไม่พบหน้านี้'); // ส่งข้อความแจ้งเตือน
    });