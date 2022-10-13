const express = require("express");
const path = require("path");

// Importing route files
const registrationRoutes = require("./routes/register_routes");
const coffeeRoutes = require("./routes/coffee_routes");

// instantiate
const app = express();

// Configurations
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //similar to app.set("views","./views")

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));

// Routes  anatomy of express server
app.use("/user", registrationRoutes);

//coffee
app.use("/coffee", coffeeRoutes);

// Invalid Routes
app.get("*", (req, res) => {
	res.send(
		`<h2 style='text-align:center;margin-top:200px;font-size:100px;'> 404 🥹😭🥹</h2>
		<p style='text-align:center;color:#bd0303'>Page you looking for doesn't exist</p>`
	);
});

//Port
app.listen(4000, console.log("MVC app happening on port 4000"));
