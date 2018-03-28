const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('UserModel', userSchema);
module.exports = userModel;

userModel.findAllUsers = findAllUsers;
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByType = findUserByType;

// find all users
function findAllUsers(){
    return userModel.find();
}

// create user
function createUser(user) {
    userModel.create(user, function (err) {
        if (err) return handleError(err);
    });
}

// find user by id
function findUserById(userId) {
   return userModel.findById(userId, function (err) {
        if (err) return handleError(err);
    });
}

// find user by type
function findUserByType(type) {
    return userModel.find({type: type});
}