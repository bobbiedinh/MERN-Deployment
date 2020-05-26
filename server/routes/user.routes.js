const UserCtl = require('../controllers/user.controller');

module.exports = function(app){
    app.post('/api/user', UserCtl.register);
    app.post('/api/user/login', UserCtl.login);
    app.delete('/api/user/logout', UserCtl.logout);
}