
const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/AuthorController");

router.get("/", AuthorController.renderAll );
router.post("/", AuthorController.createAuthor);
router.get("/:id", AuthorController.postAuthor);


module.exports = router;
