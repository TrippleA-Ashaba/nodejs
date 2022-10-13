const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require("path");

// Configurations
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //similar to app.set("views","./views")

// Middleware
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));

// Routes
app.get("/", (req, res) => {
	res.render("index/index");
});

app.post("/", (req, res) => {
	console.log(req.body);
	let name = req.body.role;
	res.send("Registered " + name);
});

// coffee
app.get("/coffee", (req, res) => {
	res.render("coffee/index");
});

app.get("/about", (req, res) => {
	res.render("coffee/about");
});
//Port
app.listen(3000, console.log("Listening on port 3000"));

// multer
// passport
// passport-local
// passport-local-mongoose
// moment
