// server.js
// load the things we need
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// set view to views
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

//Global Vars
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});

//Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000, function(){
    console.log('Server Started on Port 3000...');
})
