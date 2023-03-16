const express = require('express');
const exphbs  = require('express-handlebars');

var app = express();
app.listen(process.env.PORT || '4000'); 


app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');


app.get('/hbs', function(req, res){
    res.render('index');
});
