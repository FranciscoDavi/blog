const Post = require('../models/Post');

class HomeController{

    async index(req, res){
        const posts = await Post.findAll();
        res.render('home', {posts});
    }

    async details(req, res){
        const {slug} = req.params;
        const post = await Post.find({slug: slug});
        
        if(post.length == 0){
            res.redirect('/');
        }else{
            res.render('post', {post});
        }
    }




}

module.exports = new HomeController();