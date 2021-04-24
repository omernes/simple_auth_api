var store = new Set()

function revokeToken(user) {
    store.add(user.jti);
}

function isRevoked(req, res, next) {
    if (req.user && req.user.jti && store.has(req.user.jti)) {
        throw new Error("Token revoked");
    }
    next();
}

module.exports = {
    isRevoked,
    revokeToken
}