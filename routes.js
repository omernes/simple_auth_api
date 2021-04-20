const expressJwt = require('express-jwt')

const userController = require('./controllers/user.controller')
const dataController = require('./controllers/data.controller')

function authenticate(req, res, next) {
    console.log('authnticated')
    next()
}


module.exports = function(app) {
    app.get('/login', userController.login);
    app.get('/logout', userController.logout);
    app.post('/register', userController.register);

    app.get('/data/get', authenticate, dataController.get)
    app.post('/data/add',  authenticate, dataController.add)
}