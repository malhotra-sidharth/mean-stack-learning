let userModel = require('./models/user/user.model.server');

let user = {
    userName: "joe",
    firstName: "jojo",
    lastName: "jojo",
    type: "student",
    gpa: 3.2
};

// save user
userModel.createUser(user);

// findAll users
userModel.findAllUsers()
    .then(function (response) {
        console.log(response);
    })
