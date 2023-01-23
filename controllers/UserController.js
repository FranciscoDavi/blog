const User = require('../models/User');
const bcrypt = require('bcrypt');
const validUser = require('../helpers/validUser');

class UserController {

    index(req, res){
        res.render('login', {msg: req.flash('msg')});
    }

    renderRegister(req, res){
        res.render('register', {msg: req.flash('msg')});
    }

    async register(req, res){
        const {confirmPassword, ...user} = req.body;
        const err = validUser(user, confirmPassword);

        if(err){
            req.flash('msg', err[0]['err-msg']);
            res.redirect('/register');
        }else{
            const emailExists = await User.findEmail(user.email);
            const userExists = await User.findUsername(user.username);

            if(emailExists){
                req.flash('msg', 'Email ja cadastrado!');
                res.redirect('/register');
            }
            else if(userExists){
                req.flash('msg', 'Nome de usuário indisponivel!');
                res.redirect('/register');
            }else{
                const hash = await bcrypt.hash(user.password, 10);
                user.password = hash;

                const result = await User.new(user);
                
                if(result == undefined){
                    res.redirect('/register');    
                }else{
                    res.redirect('/login');
                }
            }
        }
    } 


    async login(req, res){
        const {username, password} = req.body;

        const user = await User.findUser(username);

        if(!user){
            req.flash('msg', 'Usuário ou senha Invalidos!');
            res.redirect('/login');
        }else{
            const correct = bcrypt.compareSync(password, user.password);
            if (correct){
                req.session.user = {
                    id: user.id,
                    username: user.username,
                }
                res.redirect('/dashboard');
            }else{
                req.flash('msg', 'Usuário ou senha Inválidos!');
                res.redirect('/login');
            }
           
        }
    }

    logout(req, res){
        req.session.destroy();
        res.redirect('/login');
    }

    

}

module.exports = new UserController();