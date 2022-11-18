/* installed third part packages */
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
//mongoose main manifest file
//config MongoDB
let mongoose = require('mongoose');
let DB = require('./db');
//point moongoose to database URI (in db.js)
mongoose.connect(DB.URI);
//create connection
let mongDB = mongoose.connection;
//connection error
mongDB.on('error',console.error.bind(console,'Connection Error:'));
//check once if its running
mongDB.once('open', ()=>{
    console.log('connected to the MongoDB')
}
);

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
const { title } = require('process');
//Configure Router
let animeRouter = require('../routes/anime');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));//for the view your are directiong it to the views folder
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public'))); //setting default path to public folder
app.use(express.static(path.join(__dirname, '../../node_modules')));//putting bode_modules into path
app.use(express.static(path.join(__dirname, '../Assets')));
app.use(express.static('../Assets'))

app.use('/', indexRouter); //main page route . ex: localhost:3000
app.use('/users', usersRouter);//page route ex. localhost:3000/users
app.use('/animelist', animeRouter); //localhost:300/anime-list

// catch 404 and forward to error handler
//sends error code listed below if user types in incorrect domain
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
       title:"Error"
  }
 
  );
});

module.exports = app;
