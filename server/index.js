require('dotenv').config();

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(path.join(__dirname, '../views/partials'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});
app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.')
        }
    });
    next();
});
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => {
    res.render('app.hbs', {
        page_title: 'Home page',
        content: '<p>This is the content for the home page.</p>'
    });
});
app.get('/about', (req, res) => {
    res.render('app.hbs', {
        page_title: 'About page',
        content: '<p>This is the content for the about page.</p>'
    });
});
app.get('/bad', (req, res) => {
    res.send({
        errors: [
            {
                code: 404,
                message: 'Page not found.'
            }
        ]
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`);
});
