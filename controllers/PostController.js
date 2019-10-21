const postService = require("../services/post-service");
const Post = require('../models/Post');
const categoryService = require("../services/category-service");
const tagService = require("../services/tag-service");
const authorService = require("../services/author-service");

module.exports = {

    async createPost (req,res){
        console.log(req.body)
        const title = req.body.title;
        const content = req.body.content;
        const categoryId = Number(req.body.category);
        
        
        let tagStringId ;

            if(req.body.tag === undefined){
                tagStringId = [ ]
            } else if (typeof req.body.tag === 'string') {
                tagStringId = [req.body.tag]
            } else {
                tagStringId = [...req.body.tag ]
            };

        const tagIds = [];
        tagStringId.forEach(tagId => {
            tagIds.push(Number(tagId))
        })

        let AuthorStringId ;

            if(req.body.author === undefined){
                AuthorStringId= [ ]
            } else if (typeof req.body.author === 'string') {
                AuthorStringId= [req.body.author]
            } else {
                AuthorStringId = [...req.body.author ]
            };

        const authorIds = [];
        AuthorStringId.forEach(authorId => {
            authorIds.push(Number(authorId))
        })

        const post = new Post(title, content);
        post.categoryId = categoryId; 
        await postService.addPost(post, tagIds, authorIds);
        
        res.redirect("/post"); // redirects back to index page
        
    },
    
    async renderAll(req, res){
        const post = await postService.viewPosts();
        res.render("post", {post:post})
    },

    async getPostForm(req, res){
        res.render("submitpost", {category: await categoryService.findCategory(), tag: await tagService.findTags(), author: await authorService.findAuthors()})
    }

} 