// ejs - embedded javascript template

const express = require('express');
const app = express();

// set ejs template engine
app.set('view engine', 'ejs');
// set folder location of ejs files
app.set('views', './ejs_views');

app.locals.maintitle = 'EJS demo1';
app.locals.date = new Date();

// app.locals.title will be hidden
app.get('/', (req, res) => {
    const obj = {
        title: '<em>Web Server Programming</em>',
        students: [
            {name: 'John', gpa: 3.9},
            {name: 'Mary', gpa: 4.0},
            {name: 'Kelly', gpa: 2.9},
            {name: 'Grace', gpa: 3.5}
        ]
    };
    res.render('index', obj);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});