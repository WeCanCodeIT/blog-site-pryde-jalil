const express = require('express');
const router = express.Router();
const TagController = require("../controllers/TagsController");

router.get("/", TagController.renderAll );


module.exports = router;

