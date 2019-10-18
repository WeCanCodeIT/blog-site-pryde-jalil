const Tag = require("../models/Tag");
const TagService = require("../services/tag-service");

module.exports = {
    async createTag(req, res){
    const tag = req.body.tag
    const tagToAdd = new Tag(tag);
    console.log(req.body)
    await TagService.addTag(tagToAdd);
    const tags = await TagService.findTags();
    console.log(tags);
    res.render("allTags",{tag:tags});

    },
    async renderAll(req, res){
        const tags = await TagService.findTags();
        res.render("tags");
    }
}