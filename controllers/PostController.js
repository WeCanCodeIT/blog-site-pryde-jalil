const postService = require("../services/post-service");
const Post = require('../models/Post');

module.exports = {

    async createPost (req,res){
        console.log(req.body)
        const title = req.body.title;
        const content = req.body.content;
        const post = new Post(title, content);

        await postService.addPost(post);
        
        res.redirect("/"); // redirects back to index page
        
    },
    
    renderAll(req, res){
        res.render("post", {title: 'Blog Posts'})
    }

} 