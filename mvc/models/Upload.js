const mongoose = require("mongoose");

const produceSchema = new mongoose.Schema({
	uniquenumber: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Registration",
		// required:true
	},
	email: String,
	producename: String,
	producetype: String,
	produceimg: String,
});
// mongoose.Schema.Types.ObjectId,

module.exports = mongoose.model("Produce", produceSchema);
