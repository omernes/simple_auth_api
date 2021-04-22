const userService = require('../services/user')

module.exports = {
    login,
    logout,
    register
};

function login(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function logout(req, res, next) {
    res.json({ message: "logged out :)" });
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json())
        .catch(err => next(err))
}