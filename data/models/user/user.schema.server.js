const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    type: String,
    office: String,
    gpa: Number,
});

module.exports = userSchema;