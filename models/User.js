const db = require('../db/connection');

class User{

    async findUsername(username){
        try{
            const result = await db.select(['username']).where({username}).table('users');
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }
        }catch(err){
            console.log(err);
            return undefined;
        }
    }

    async findEmail(email){
        try{
            const result = await db.select(['email']).where({email}).table('users');
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }
        }catch(err){
            console.log(err);
            return undefined;
        }
    }

    async findUser(username){
        try{
            const result = await db.select(['id', 'username', 'password']).where({username}).table('users');
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }
        }catch(err){
            console.log(err);
            return undefined;
        }
    }

    async new(user){
        try{
            const result = await db.insert(user).table('users');
            return result;

        }catch(err){
            console.log(err);
            return undefined;
       }

    }

}

module.exports = new User();