const Post = require('../models/PostSql');

module.exports = {
async addPost(title, content){
    return Post.create(title,content);
}
}