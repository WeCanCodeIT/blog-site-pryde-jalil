const postService = require("../services/post-service");

module.exports = {

    async createPost (req,res){
        const title = req.body.title;
        const content = req.body.content;
        const post = await postService.addPost(title, content);
        
        res.redirect("/"); // redirects back to index page
        
    },
    
    renderAll(req, res){
        res.render("post", {title: 'Blog Posts'})
    }

} 