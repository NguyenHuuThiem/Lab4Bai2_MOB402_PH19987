

const express = require('express');
const exphbs = require('express-handlebars');

var app = express();
app.listen(process.env.PORT || '4000');


app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'page2',
    layoutsDir: __dirname + '/views/layouts',

}))
app.set('view engine', '.hbs');


app.get('/tinhToan', function (req, res) {
    res.render('defaultView', {
        layout: 'main',
        soA: 10,
        soB: 7,
        kq: 17,
        operator: 'cong',
        showBody: false,
        showContentTinhToan: true,
        // shoTitle: false,
    });
});

app.get('/', function (req, res) {
    res.render('index', { 
        layout: 'main',
        showBody: true,
        showContentTinhToan: false, 
    });
});
