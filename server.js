const express = require("express");
const session = require('express-session')
const bcrypt = require('bcyrptjs')
const db = require('./db');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "megaman2",
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.get('/', (req, res) => {
    const posts = db.prepare('SELECT * FROM posts ORDER BY id DESC').all();
    res.render('index', { posts });
});

app.get('/post/:id', (req, res) => {
    const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
    if (!post) {
        return res.status(404).send("post not found :(");
    }
    res.render("post", { post });
});
app.listen(PORT, () => {
    console.log("Sever running at http://localhost:" + PORT);
});