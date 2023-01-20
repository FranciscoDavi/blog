const { findById } = require('../models/Post');
const Post = require('../models/Post');

class PostController{

    async index(req, res){
        const user = req.session.user;
        const msg = req.flash('msg');
        console.log(req.flash('msg'));
        const posts = await Post.findPostsUser(user.id);
        res.render('dashboard', {user, posts, msg});
    } 

    async register(req, res){
        const post = req.body;
        const {id} = req.session.user;
        post.id_user = id;

        const result = await Post.new(post);
    
        if(result){
            res.redirect('/dashboard');
        }else{
            res.redirect('/new');
        }

    }

    async indexEdit(req, res){
        const {id} = req.params;
        const post = await Post.findById(id);

        if(post.length > 0){
            res.render('edit', {post});
        }else{
            res.redirect('/dashboard');
        }
    }


    async edit(req, res){
        const {id, ...post} = req.body;
        const result = await Post.update(id, post);

        if(result){
            res.redirect('/dashboard');
        }else{
            res.redirect('/edit');
        }
    }
    
    async remove(req, res){
        const {id} = req.body;
        /*
        verifica se é dono do post
        const id_user = req.session.user.id;
        const post = await Post.findById(id);
        if(post[0].id_user != id_user){
            res.redirect('/dashboard');
        }
        */
        const result  = await Post.delete(id);

        if(result){
            res.redirect('/dashboard');
        }else{
            res.redirect('/dashboard');
        }
         
    }


}

module.exports = new PostController();