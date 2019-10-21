const express = require('express');
const router = express.Router();
const TagController = require("../controllers/TagsController");

router.get("/", TagController.renderAll)
router.post("/", TagController.createTag);
router.get("/:id", TagController.postTags)

module.exports = router;

