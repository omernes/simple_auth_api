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
    dataSerice.create(req.body)
        .then(() => res.json())
        .catch(err => next(err))
}

