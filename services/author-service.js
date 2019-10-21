const Author = require("../models/AuthorSql");

module.exports = {
    async findAuthors() {

        return await Author.findAll()
    },
    async findSome(authorId){
        const AuthorToGet = await Author.findByPk(authorId)
        return AuthorToGet;

    },

    async authorToAdd(author){
        await Author.create(author);
    }
    
    }