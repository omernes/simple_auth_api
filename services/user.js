const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config')
const User = require('../models/user')

async function create(params) {
    if (await User.findOne({ $or: [{ name: params.name }, { email: params.email }] })) {
        throw 'Username or email is already taken';
    }

    params.password = bcryptjs.hashSync(params.password, 10);

    const user = User(params)
    await user.save()
}

async function authenticate({name, password}) {
    const user = await User.findOne({ name });
    if (user && bcryptjs.compareSync(password, user.password)) {
        const token = jwt.sign({ name: user.name, role: user.role }, config.TOKEN_SECRET, { expiresIn: '3600s' });
        return {
            token
        };
    }
}

module.exports = {
    create,
    authenticate
}