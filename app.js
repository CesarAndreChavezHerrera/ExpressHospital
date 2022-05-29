var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const hbs = require ('hbs');
const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

//conexión a tabla pasientes en mongodb
mongoose.connect('mongodb://localhost:27017/patient', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Se establecio conexion a mongodb"))
.catch((e) => console.log("Error", e))

const patientSchema = new Schema({
    name: String,
    last_n: String,
    edad: Number,
    dir: Number,
})

// crear modelo
const Patient = mongoose.model('pasientes', patientSchema);
//mostrar
const mostrar = async () =>{
    const pasientes = await Patient.find()
    console.log(pasientes)
}
//crear
/*const crear = async () =>{
  const paciente = new Patient({
    name: 'Pedro',
    last_n: 'Troglio',
    edad: 18,
    dir: 'Av. La mascota, Usulután'
  })
  const resultado = await persona.save()
  console.log(resultado)
}*/
//crear()
module.exports = Patient;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const methods = require('./methods');
const router = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials', function(err){});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//body
app.use(bodyParser.urlencoded({ extended: true}));

//inyect el usuario leyendo el authToken de la cookie
app.use((req,res,next) =>{
  const authToken = req.cookies['AuthToken'];

  req.user = methods.authTokens[authToken]; 
  next();

});

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
