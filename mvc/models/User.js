const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	uniquenumber: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	gender: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	role: {
		type: String,
		required: String,
		trim: true,
	},
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "uniquenumber",
});

module.exports = mongoose.model("Registration", userSchema);
