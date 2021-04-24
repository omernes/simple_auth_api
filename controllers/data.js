const dataSerice = require('../services/data')

module.exports = {
    get,
    add
};

function get(req, res, next) {
    var {from, to} = req.query;
    from = new Date(Number(from));
    to = new Date(Number(to));
    dataSerice.list({from, to})
        .then(data => res.json(data))
        .catch(err => next(err))
}

function add(req, res, next) {
    if (req.user.role < 5) {
        var err = new Error('Insuffecient privileges to perform the action.');
        err.statusCode = 403
        throw err;
    }
    const {procedure, timestamp, value} = req.body;
    dataSerice.create(procedure, timestamp, value)
        .then(() => res.json())
        .catch(err => next(err))
}

