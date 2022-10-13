const express = require("express");
const app = express();

// configurations

// Middleware
app.use(express.urlencoded({ extended: true }));
// Static

// Routes
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height) ** 2;
	let result = (weight / height).toFixed(2);
	let status = "";
	if (result > 25) {
		status = "Obese";
	} else if (result > 20) {
		status = "Normal";
	} else {
		status = "Thin";
	}
	res.send(
		`<h2 style="text-align:center;margin-top:90px">Your Bmi is   ${result}. And You're ${status}<h2>`
	);
});

// Server
app.listen(3000, console.log("Listening on port 3000!"));
