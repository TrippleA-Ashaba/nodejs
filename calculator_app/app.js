const express = require("express");
const app = express();

// configurations

// middleware
app.use(express.urlencoded({ extended: true }));

// Static

// Routes
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	// console.log(req.body);
	// console.log(typeof Number(req.body.num1));
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);
	let sum = num1 + num2;
	res.send(`Your total is ${sum} `);
});

// Server
app.listen(3000, console.log("Listening on port 3000"));
