const Post = require('../models/PostSql');

module.exports = {
async addPost(post){
    return Post.create(post);
}, 
async findAll () {
    return await Post.findAll()
  },
}