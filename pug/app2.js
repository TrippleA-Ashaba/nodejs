const express = require("express");
const path = require("path");

const app = express();

// Configurations
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //similar to app.set("views","./views")

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));

// Routes
app.get("*", (req, res) => {
	res.send("<h2 style='text-align:center;margin-top:200px;font-size:100px;'> 404 🤣😂😂<h2>");
});

//Port
app.listen(3000, console.log("Listening on port 3000"));
