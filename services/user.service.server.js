module.exports = function (app) {

    let userModel = require('../data/models/user/user.model.server');
    app.get('/api/user', findAllUsers);
    app.get('/api/user/:userid', findUserById);

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (response) {
                res.json(response);
            })
    }

    function findUserById(req, res) {

    }
}