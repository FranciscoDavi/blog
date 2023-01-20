const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserController {

    index(req, res){
        res.render('login', {msg: req.flash('msg')});
    }

    renderRegister(req, res){
        res.render('register', {msg: req.flash('msg')});
    }

    async register(req, res){
        const {confirmPassword, ...user} = req.body;
        
        if(user.firstname == undefined || user.firstname == '' ||  user.firstname.length <= 3){
            req.flash('msg', 'Nome inválido');
            res.redirect('/register');
        }else if(user.lastname == undefined || user.lastname == '' ||  user.firstname.length <= 3){
            req.flash('msg', 'Sobrenome Inválido');
            res.redirect('/register');
        }else if(user.username == undefined || user.username== '' ||  user.username.length <= 3){
            req.flash('msg', 'Username Inválido');
            res.redirect('/register'); 
        }else if(user.email == undefined || user.email== '' ||  user.email.length <= 5){
            req.flash('msg', 'Email Inválido');
            res.redirect('/register'); 
        }else if(user.dat == undefined || user.dat== '' ||  user.dat.length <= 5){
            req.flash('msg', 'Data de nascimento Inválida');
            res.redirect('/register'); 
        }else if(user.password == undefined || user.password== '' ||  user.password.length <= 7 || user.password != confirmPassword){
            req.flash('msg', 'Senha Inválida ou não coincidem');
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

}

module.exports = new UserController();