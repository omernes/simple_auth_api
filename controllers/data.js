const dataSerice = require('../services/data')

module.exports = {
    get,
    add
};

function get(req, res, next) {
    dataSerice.list(req.query)
        .then(data => res.json(data))
        .catch(err => next(err))
}

function add(req, res, next) {
    if (req.user.role < 5) {
        res.status(403).json({ 'reason': 'Insuffecient privileges to perform the action.' })
    }
    dataSerice.create(req.body)
        .then(() => res.json())
        .catch(err => next(err))
}

