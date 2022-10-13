const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("coffee/index");
});

router.get("/about", (req, res) => {
	res.render("coffee/about");
});

module.exports = router;
