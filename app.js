var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./util/db');
var indexRouter = require('./routes/index');
const CategoryRouter= require("./routes/CategoryRouter");
const PostRouter= require("./routes/PostRouter");
const AuthorRouter= require("./routes/AuthorRouter");
const TagsRouter= require("./routes/TagRouter");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/post', PostRouter);
app.use('/category', CategoryRouter);
app.use('/author', AuthorRouter);
app.use('/tags', TagsRouter);


// catch 404 and forward to error handler
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
  res.render('error');
});
sequelize.sync({ force: true })
  .then(() => console.log('DB Connected'))
  .catch(console.error)

module.exports = app;
