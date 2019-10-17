
const express = require('express');
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/", PostController.renderAll );


module.exports = router;
