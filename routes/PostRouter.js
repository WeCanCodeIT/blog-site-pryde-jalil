
const express = require('express');
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/", PostController.renderAll );
router.post("/", PostController.createPost);

module.exports = router;
