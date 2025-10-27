// const http = require('http') 
// const port = process.env.PORT || 3000
// const fs = require('fs') 
// //function to serveStaticFile อ่านไฟล์บน server และทำการสร้าง Header และทำการส่ง output ที่อยู่ในไฟล์ส่งออกไป
// function serveStaticFile(res, path, contentType, //iteration
//     responseCode = 200) {
//     fs.readFile(__dirname + path, (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             return res.end('500 - Internal Error')
//         }
//         res.writeHead(responseCode, {
//             'Content-Type':
//                 contentType
//         })
//         res.end(data)
//     })
// } 
// const server = http.createServer((req,res) => {
//     const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
//     switch(path) {
//       case '': // localhost:3000
//         serveStaticFile(res, '/public/home.html', 'text/html')
//         break
//       case '/about':
//         serveStaticFile(res, '/public/about.html', 'text/html')
//         break
//       case '/img/panda-logo.png':
//         serveStaticFile(res, '/public/img/panda-logo.png', 'image/png')
//         break
//       default:
//         serveStaticFile(res, '/public/404.html', 'text/html', 404)
//         break
//     }
//   })
// const server = http.createServer((req, res) => { 
//   res.writeHead(200, { 'Content-Type': 'text/plain' }) 
//   res.end('Hello world! swefsefsfedawdawd') // cant put element in this
// }) 
// server.listen(port, () => console.log(`server started on 
// port ${port}; ` + 'press Ctrl-C to terminate....')) // ใช้ debug

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

app.get('/home', function(req, res){
  res.send("Hello World!, via GET");
});

app.get('/cats', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.get('/dogs', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.get('/uhhhh', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})



// create directory 'public'
app.use(express.static('public'));
app.use(express.static('img'));




 

