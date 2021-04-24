const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config')
const User = require('../models/user')


async function create(name, email, password, role) {
    if (await User.findOne({ $or: [{ name }, { email }] })) {
        throw new Error('Username or email is already taken');
    }

    password = bcryptjs.hashSync(password, 10);

    const user = User({name, email, password, role});
    await user.save();
}

async function authenticate(name, password) {
    const user = await User.findOne({ name });
    if (user && bcryptjs.compareSync(password, user.password)) {
        const jti = user.name + Date.now();
        const token = jwt.sign({ jti: jti, name: user.name, role: user.role }, config.TOKEN_SECRET, { expiresIn: config.TOKEN_EXPIRES_IN });
        return {
            token
        };
    }
}


module.exports = {
    create,
    authenticate
}