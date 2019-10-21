const Tag = require("../models/Tag");
const TagService = require("../services/tag-service");

module.exports = {
    async createTag(req, res){
    const tag = req.body.tag
    const tagToAdd = new Tag(tag);
   
    await TagService.addTag(tagToAdd);
    const tags = await TagService.findTags();
    
    res.render("tags",{tag:tags});

    },
    async renderAll(req,res){
        res.render("tags", {tag:await TagService.findTags()})
    },
   

    async postTags(req,res){
        const tagId = Number(req.params.id);;
        const tag =await TagService.tagPost(tagId)
        tag.post =  await tag.getPosts()
        res.render("postTags", {tag:tag})

    }
}