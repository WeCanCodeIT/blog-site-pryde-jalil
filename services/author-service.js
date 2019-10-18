const Author = require("../models/AuthorSql");

module.exports = {
    async findAll () {

        return await Author.findAll()
    },

    async findById (id) {
        return await Author.findByPk(id)
        },
    async findSome(authorId){
        const AuthorToGet = await Author.findByPk(authorId)
        return AuthorToGet.getPosts();

    }
    
    }