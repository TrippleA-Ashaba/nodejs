const express = require("express");
const router = express.Router();
const multer = require("multer");

const Produce = require("../models/Upload");
const Registration = require("../models/User");

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/upload", async (req, res) => {
	let ufList = await Registration.find({ role: "UrbanFarmer" });

	res.render("index/uf_upload", { UrbanFarmers: ufList });
});

router.post("/upload", upload.single("produceimg"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new Produce(req.body);
		produce.produceimg = req.file.path;
		await produce.save();
		res.redirect("/upload");
	} catch (error) {
		res.status(400).send("Product not Saved.");
		console.log(error);
	}
});

module.exports = router;
