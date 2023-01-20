const Router = require("express").Router();
//controllers
const HomeController = require('../controllers/HomeController');
const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');


//middlewares
const Auth = require('../middlewares/UserAuth');

//Home
Router.get('/', HomeController.index);
Router.get('/post/:id', HomeController.details);

//user
Router.get('/register', UserController.renderRegister);
Router.post('/register', UserController.register);

Router.get('/login', UserController.index);

Router.post('/login', UserController.login);

Router.post('/logout', Auth, (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})


//posts
Router.get('/dashboard', Auth, PostController.index);
Router.get('/new', Auth, (req, res) => {
    res.render('new');
});
Router.post('/new', Auth, PostController.register);

Router.get('/edit/:id', Auth, PostController.indexEdit);
Router.post('/edit', Auth, PostController.edit);
Router.post('/remove', Auth, PostController.remove);


module.exports = Router;