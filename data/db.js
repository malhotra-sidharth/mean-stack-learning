module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = "course-manager";
    let connectionString = "mongodb://localhost/";
    connectionString += databaseName;
    mongoose.connect(connectionString);
};