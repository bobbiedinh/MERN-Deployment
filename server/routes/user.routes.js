const UserCtl = require('../controllers/user.controller');

module.exports = function(app){
    app.post('/user', UserCtl.register);
    app.post('/user/login', UserCtl.login);
    app.delete('/user/logout', UserCtl.logout);
}