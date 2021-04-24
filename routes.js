const expressJwt = require('express-jwt');

const userController = require('./controllers/user');
const dataController = require('./controllers/data');

const config = require('./config');
const blacklist = require('./middleware/blacklist');

var blacklistStore = []

function isRevoked(req, user, fn) {
    blacklistStore.get(user.jti, (res, err) => {
        
    })
}


module.exports = function(app) {
    app.use(expressJwt({
        secret: config.TOKEN_SECRET, algorithms: ['HS256']
    }).unless({
        path: [
            '/login',
            '/register'
        ]
    }));

    app.use(blacklist.isRevoked);

    app.post('/register', userController.register);
    app.post('/login', userController.login);
    app.get('/logout', userController.logout);
    
    app.get('/data/get', dataController.get)
    app.post('/data/add',  dataController.add)
}