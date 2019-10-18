const Tag = require("../models/TagSql");




module.exports= {
async addTag(tagToAdd){
    await Tag.create(tagToAdd);
},
async findTags(){
    return await Tag.findAll()
},
}