const mongoose = require('mongoose');
const {Pirate} = require('../models/pirate.model');

module.exports.findPirates = (_req, res)=>{
    Pirate.find({})
        .then(pirates => res.json(pirates))
        .catch(err=> res.json(err));
}

module.exports.findPirate = (req, res) =>{
    Pirate.findById(req.params.id)
        .then(pirate=>res.json(pirate))
        .catch(err=> res.json(err));
}

module.exports.createPirate= (req, res) => {
    const {name, treasure, imageUrl, phrase, desc, position} = req.body;
    Pirate.create({
        name,
        treasure,
        imageUrl,
        phrase,
        desc,
        position
    })
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
}

module.exports.editPirate= (req, res) => {
    Pirate.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
        .then(results=> res.json({"Deleted": results}))
        .catch(err => res.json(err));
}
