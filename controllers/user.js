const blacklist = require('../middleware/blacklist')
const userService = require('../services/user');
const config = require('../config');

module.exports = {
    login,
    logout,
    register
};

function login(req, res, next) {
    const { name, password } = req.body;
    userService.authenticate(name, password)
        .then(user => {
            if (user) res.json(user)
            else {
                var err = new Error("Username or password in incorrect");
                err.statusCode = 400;
                next(err);
            }
        })
        .catch(err => next(err));
}

function logout(req, res, next) {
    // blacklistJwt.revoke(req.user);
    blacklist.revokeToken(req.user)
    res.redirect(config.LANDING_PAGE_URL);
}

function register(req, res, next) {
    const { name, email, password, role } = req.body;
    userService.create(name, email, password, role)
        .then(() => res.json())
        .catch(err => next(err))
}