const Category = require("../models/CategorySql");

module.exports= {

async findCategory(){
    return await Category.findAll()
},

async postCategory (categoryId){
    const categoryToGet = await Category.findByPk(categoryId)
    return categoryToGet;

},
}