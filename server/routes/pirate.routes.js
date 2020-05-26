const PirateCtl = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/', PirateCtl.findPirates);
    app.post('/new', PirateCtl.createPirate);
    app.get('/pirate/:id', PirateCtl.findPirate);
    app.put('/pirate/:id', PirateCtl.editPirate);
    app.delete('/pirate/:id', PirateCtl.deletePirate);
}
