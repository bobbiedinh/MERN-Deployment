const PirateCtl = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api', PirateCtl.findPirates);
    app.post('/api/new', PirateCtl.createPirate);
    app.get('/api/pirate/:id', PirateCtl.findPirate);
    app.put('/api/pirate/:id', PirateCtl.editPirate);
    app.delete('/api/pirate/:id', PirateCtl.deletePirate);
}
