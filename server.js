const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
//environment variable for port
const port = process.env.PORT || 3000;   // 3000 this is used for development in local machine and github process.env.PORT
// setup view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    });

});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
});
app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
});