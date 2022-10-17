const express = require("express");
const router = express.Router();

// importing model
const Registration = require("../models/User");

// register route
router.get("/register", (req, res) => {
	res.render("index/register_ao");
});

router.post("/register", async (req, res) => {
	console.log(req.body);
	try {
		const user = new Registration(req.body);
		let uniqueExists = await Registration.findOne({ uniquenumber: req.body.uniquenumber });
		if (uniqueExists) {
			return res
				.status(400)
				.send(
					"<h2 style='text-align:center;margin-top:200px;font-size:100px;'>User already Exists 😭</h2>"
				);
		} else {
			await Registration.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.send(
					"<h1 style='text-align:center;margin-top:10%;font-size:70px'>Registered 😊</h1>"
				);
				// res.redirect("/")
			});
		}
	} catch (error) {
		res.status(400).send(
			"<h2 style='text-align:center;margin-top:200px;font-size:100px;'>Something went wrong 🥹🥹🥹!</h1>"
		);
		console.log(error);
		// catch more errors.... registrationn with existing id
	}
});

router.get("/farmerOneList", async (req, res) => {
	try {
		let items = await Registration.find({ role: "FarmerOne" });
		// log(items);
		// console.log(items);
		res.render("index/fo_list", {
			farmerones: items,
		});
	} catch (error) {
		res.status(400).send(
			"<h2 style='text-align:center;margin-top:200px;font-size:100px;'>Unable to query Farmer Ones from DB 🥹🥹🥹!</h1>"
		);
	}
});

module.exports = router;
