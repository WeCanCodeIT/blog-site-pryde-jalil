
const express = require('express');
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/", PostController.renderAll );
router.post("/", PostController.createPost);
router.get("/new", PostController.getPostForm)


module.exports = router;
