const Author = require("../models/Author");
const AuthorService = require("../services/author-service");

module.exports = {
    async createAuthor(req, res){
    const name = req.body.author
    const author = new Author(name);
    await AuthorService.authorToAdd(author);
    const authors = await AuthorService.findAuthors();
    res.render("author",{author:authors});

    },
    async renderAll(req, res){
        const authors = await AuthorService.findAuthors();
        res.render("author",{author:authors});
    },
    async postAuthor (req, res) {
        const authorId = Number(req.params.id);
        const author= await AuthorService.findSome(authorId);
        author.post = await author.getPosts();
        res.render("authorPost", {author})
      
    }
}