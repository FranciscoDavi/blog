const db = require('../db/connection');

class Post{

    async findAll(){
        try{
            const result = await db.select('posts.id','posts.title', 'posts.slug','posts.body', 'users.username').table('posts')
                                    .join('users', 'users.id', '=', 'posts.id_user').orderBy('posts.id', 'desc');
                                        
            return result;
        }catch(err){
            return [];
        }
    }

    async find(data){
        try{
            const post = db.select('*').where(data).table('posts');
            return post;
        }catch(err){
            return undefined;
        }
    }

    async findPostsUser(id_user){
        try{
            const posts = db.select('*').where({id_user}).table('posts').orderBy('id', 'desc');
            return posts;
        }catch(err){
            return undefined;
        }
    }

    async new(post){  
        try{
            const result = await db.insert(post).where({id_user: post.user_id}).table('posts');
            return result;

        }catch(err){
            return undefined;
        }
    }

    async update(id, post){
        try{
            const result = await db.update(post).where({id}).table('posts');
            return result;
        }catch(err){
            return undefined;
        }
    }

    async delete(id){
        try{
            await db.delete().where({id}).table('posts');
            return true;
        }catch(err){
            return undefined;
        }
    }



}

module.exports = new Post();