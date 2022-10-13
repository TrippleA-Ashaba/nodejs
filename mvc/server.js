const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");

//express sesssion
const expressSession = require("express-session")({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
});

// Importing route files
const registrationRoutes = require("./routes/register_routes");
const coffeeRoutes = require("./routes/coffee_routes");

// instantiate
const app = express();

// =========================================== DB ===============================================
// Setting up db connections
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once("open", function () {
	console.log("Connected to MongoDB");
});
// Check for db errors
db.on("error", function (err) {
	console.error(err);
});

// Configurations
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //similar to app.set("views","./views")

// =============================================== Middleware ===========================================
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));
app.use(expressSession);

// passport configuration
app.use(passport.initialize());
app.use(passport.session());

// ======================================================= Routing ===================================
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
