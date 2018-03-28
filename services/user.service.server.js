module.exports = function (app) {

    let userModel = require('../data/models/user/user.model.server');
    app.get('/api/user', findAllUsers);
    app.get('/api/user/:userId', findUserById);

    // find all users
    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (response) {
                res.json(response);
            })
    }

    // find user by id
    function findUserById(req, res) {
        let userId = req.params.userId;
        userModel.findUserById(userId)
            .then(function (response) {
                res.json(response);
            })
    }
}