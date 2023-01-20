const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const router = require('./routes/routes');
const flash = require('connect-flash');
//view engine
app.set('view engine', 'ejs');

//session
app.use(session({
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 300000}
}));

//static files
app.use(express.static(__dirname + '/public'));
//flash mensagens
app.use(flash());

//json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

  
app.get('/test', (req, res) => {
    req.flash('message', {err: 'Usuario ja cadastrado'});
    res.redirect('/display-message');
  });
    
  app.get('/display-message', (req, res) => {
      res.send(req.flash('message'));
  });

//rotes
app.use('/', router);

//server init
app.listen('3000', () => {
    console.log(`Server aberto em http://localhost:${port}`);
});