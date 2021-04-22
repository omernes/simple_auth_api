const expressJwt = require('express-jwt')

const userController = require('./controllers/user')
const dataController = require('./controllers/data')

const config = require('./config')


module.exports = function(app) {
    app.use(expressJwt({ secret: config.TOKEN_SECRET, algorithms: ['HS256'] }).unless({
        path: [
            '/login',
            '/register'
        ]
    }))

    app.post('/register', userController.register);
    app.post('/login', userController.login);
    app.get('/logout', userController.logout);
    
    app.get('/data/get', dataController.get)
    app.post('/data/add',  dataController.add)
}