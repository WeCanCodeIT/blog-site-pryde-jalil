const express = require('express');
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/", CategoryController.renderAll );

router.get("/:id", CategoryController.categoryPost)


module.exports = router;

