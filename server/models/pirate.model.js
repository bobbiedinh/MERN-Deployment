const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a name!'
    ],
    minlength: [
        3,
        'Please provide a name that is at 2+ characters.'
    ]
    },
    treasure: {
        type: Number,
        required: [
            true,
            'Please provide treasure!'
        ]
    },
    imageUrl: {
        type: String,
        required: [
            true,
            'Please provide an image URL!'
        ]
    },
    phrase:{
        type:String,
        required: [
            true,
            "Please provide phrase"
        ]
    },
    desc: {
        hook: {
            type: Boolean,
            default: true
        },
        eye: {
            type: Boolean,
            default: true
    },
        peg: {
            type: Boolean,
            default: true
    }
},
    position: {
        type: String,
        required: [
        true,
        'Please provide position.'
    ]
    }
}, {
    timestamps: true
});

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);