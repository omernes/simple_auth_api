module.exports = {
    login,
    logout,
    register
};

function login(req, res, next) {
    res.json({ message: "logged in" });
}

function logout(req, res, next) {
    res.json({ message: "logged out" });
}

function register(req, res, next) {
    res.json({ message: "registered" });
}