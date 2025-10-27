const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require('path');
const PORT = 3000;
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Middleware setup
app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key-for-your-store', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 10 * 60000 } 
}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Connect to SQLite database
let db = new sqlite3.Database('phones.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

// Routes
app.get('/', (req, res) => {
    res.redirect('/menu');
});

app.get('/menu', (req, res) => {  
    const query = 'SELECT * FROM phones ';
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        // console.log(rows);
        res.render('showproducts', { data: rows });
    });
});

// add to cart route
app.get('/add-to-cart/:item', (req, res) => {
    const item = req.params.item;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    // Add item to cart
    req.session.cart.push(item); //[1,5,3,6,6]
    console.log(req.session.cart);
    console.log(`Item '${item}' added to cart...`);
    res.redirect('/menu');
});

// View cart
app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];
    console.log(`List in your cart: ${cart.join(', ')}`);

    db.serialize(() => {
        const query = `SELECT * FROM phones WHERE id IN (${cart.join(', ')});`;
        db.all(query, (err, yourdata) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(yourdata);
                res.render('showcart', { data: yourdata });
            }
        });
    });
});

// Clear cart
app.get('/clear-cart', (req, res) => {
    req.session.cart = [];
    res.send('Cart cleared!');
    res.redirect('/menu');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

