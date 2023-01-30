const Post = require('../models/Post');
const validPost = require('../helpers/validPost');

class PostController{

    async index(req, res){
        const user = req.session.user;
        const msg = req.flash('msg');
        const posts = await Post.findPostsUser(user.id);
        res.render('dashboard/dashboard', {user, posts, msg});
    } 

    renderNew(req, res){
        const user = req.session.user;
        res.render('dashboard/new', {user, msg: req.flash('msg')});
    }

    async renderView(req, res){
        const {id} = req.params;
        const user = req.session.user;
        const post = await Post.find({id: id});
        res.render('dashboard/view', {user, post, msg: req.flash('msg')});
    }

    async register(req, res){
        const post = req.body;
        const {id} = req.session.user;
        post.id_user = id;
        post.title = post.title.trim();
        post.slug = post.title.replaceAll(' ', '-').toLowerCase();

        const err = validPost(post);

        if(err.length > 0){
            req.flash('msg', err[0]['err-msg']);
            res.redirect('/new');
        }else{
            const exist = await Post.find({title: post.title});
            if(exist.length > 0){
                req.flash('msg', 'Ja existe um post com esse titulo');
                res.redirect('/new');
            }else{
                const result = await Post.new(post);
                if(result){
                    res.redirect('/dashboard');
                }else{
                    res.redirect('/new');
                }
            }
            
        }
    }

    async indexEdit(req, res){
        const {id} = req.params;
        const user = req.session.user;
        const post = await Post.find({id: id});

        if(post.length > 0){
            res.render('dashboard/edit', {user, post});
        }else{
            res.redirect('/dashboard');
        }
    }

    async edit(req, res){
        const {id, ...post} = req.body;
        post.title = post.title.trim();
        post.slug = post.title.replaceAll(' ', '-').toLowerCase();
        const result = await Post.update(id, post);

        if(result){
            res.redirect('/dashboard');
        }else{
            res.redirect('/edit');
        }
    }
    
    async remove(req, res){
        const {id} = req.body;
        
        const id_user = req.session.user.id;
        const post = await Post.find({id:id});
        if(post[0].id_user != id_user){
            res.redirect('/dashboard');
        }else{
            const result  = await Post.delete(id);

            if(result){
                res.redirect('/dashboard');
            }else{
                res.redirect('/dashboard');
            }
        }
    }
}

module.exports = new PostController();