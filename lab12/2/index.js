const express = require('express');
const session = require('express-session');
const path = require("path");
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// static resourse & templating engine
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = {
    username: 'john',
    role: 'admin',
    preferences: { theme: 'dark', language: 'en' }
};

// จาก Web Service ที่อื่น
app.get("/", (req, res) => {
    const endpoint = 'http://webdev.it.kmitl.ac.th:8000/restaurant';
    fetch(endpoint)
        .then(response => response.json())
        .then(foods => {
            // console.log(foods);
            res.render('show', { data: foods });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/add-to-cart/:item', (req, res) => {
    const item = req.params.item;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    // Add item to cart
    req.session.cart.push(item);
    console.log(`Item '${item}' added to cart...`);
    console.log(req.session);
    res.redirect('/');
});

app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];
    let items = [];
    for (let i = 0; i < cart.length; i++) {
        const endpoint = 'http://webdev.it.kmitl.ac.th:8000/detail/' + cart[i];
        fetch(endpoint)
            .then(response => response.json())
            .then(food => {
                console.log(food);
                items.push(food);
                if (items.length === cart.length) {
                    res.render('cart', { data: items });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
});

app.get('/clearcart', (req, res) => {
    req.session.cart = []
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});