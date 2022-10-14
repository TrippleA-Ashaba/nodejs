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
		await Registration.register(user, req.body.password, (error) => {
			if (error) {
				throw error;
			}
			res.send(
				"<h1 style='text-align:center;margin-top:10%;font-size:70px'>Registered 😊</h1>"
			);
			// res.redirect("/")
		});
	} catch (error) {
		res.status(400).send("Something went wrong 🥹🥹🥹!");
		console.log(error);
		// catch more errors.... registrationn with existing id
	}
});

module.exports = router;
