const categoryService = require("../services/category-service");


module.exports = {
   async renderAll (req, res) {
        res.render("category", {category: await categoryService.findCategory()})
    },
    
     async categoryPost (req, res) {
            const categoryId = Number(req.params.id);
            const category = await categoryService.postCategory(categoryId);
            category.posts = await category.getPosts();
            res.render("categoryPost", {category})
          
        }
    }
