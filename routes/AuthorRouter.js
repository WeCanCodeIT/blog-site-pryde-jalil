
const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/AuthorController");

router.get("/", AuthorController.renderAll );


module.exports = router;
