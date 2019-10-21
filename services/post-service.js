const Post = require('../models/PostSql');


module.exports = {
    async addPost(post, tagIds, authorIds) {
        const newpost = await Post.create(post)
        newpost.addTag(tagIds)
        newpost.addAuthor(authorIds)

       
      }, 

async viewPosts(){
     return await Post.findAll();
}
}