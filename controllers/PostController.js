const postService = require("../services/post-service");
const Post = require('../models/Post');
const categoryService = require("../services/category-service");

module.exports = {

    async createPost (req,res){
        console.log(req.body)
        const title = req.body.title;
        const content = req.body.content;
        const post = new Post(title, content);

        await postService.addPost(post);
        
        res.redirect("/post"); // redirects back to index page
        
    },
    
    async renderAll(req, res){
        const post = await postService.viewPosts();
        res.render("post", {post: post, cateogry: await categoryService.findCategory})
    }

} 