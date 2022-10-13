const express = require("express");
const app = express();

// Configurations

// Middleware

// Simple request time logger
// app.use((req, res, next) => {
// 	let d = Date(Date.now());
// 	console.log("A new request received at " + d.toString());
// 	next();
// });

app.use(express.urlencoded({ extended: true }));

// Routes

//put request
app.put("/about", (req, res) => {
	res.send("You have changed me");
});

// post request
// app.post("/register", (req, res) => {
// 	res.send("You have registered a user");
// });

// delete request
app.delete("/about", (req, res) => {
	res.send("You have deleted something");
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/about.html");
});

app.get("/hobbies", (req, res) => {
	res.send(
		"<h1>My Hobbies</h1><ul><li>Wine</li><li>Movies</li><li>Ps4/Xbox</li><li>Music</li></ul><details>Something in here</details>"
	);
	// console.log("hobbies requested");
});

// Parameterized routes
app.get("/users/:name", (req, res) => {
	res.send("Hello " + req.params.name);
});

// Query parameters
app.get("/users", (req, res) => {
	res.send("My query params are: " + req.query.class + " and " + req.query.cohort);
});

//Redirection
app.get("/signup", (req, res) => {
	res.sendFile(__dirname + "/signup.html");
});
app.post("/signup", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});

// app.use(express.urlencoded({ extended: true }));

// Page not found handling
app.get("*", (req, res) => {
	res.send("<h1 style='text-align:center;font-size:30px;'>404! <br>🤣😂🤣</h1>");
});
app.listen(3000, () => console.log("Listening on port 3000"));
