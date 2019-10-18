const Post = require('../models/PostSql');


module.exports = {
async addPost(post){
    await Post.create(post);
}, 

async viewPosts(){
     return await Post.findAll();
}
}