const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    Description: String
});

module.exports = mongoose.model("contactus", userSchema);
