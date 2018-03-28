const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('UserModel', userSchema);
module.exports = userModel;

userModel.findAllUsers = findAllUsers;
userModel.createUser = createUser;
userModel.findUserById = findUserById;

function findAllUsers(){
    return userModel.find();
}

function createUser(user) {
    userModel.create(user, function (err) {
        if (err) return handleError(err);
    });
}