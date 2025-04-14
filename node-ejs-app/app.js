
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the EJS-powered Node App!' });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
