const {Schema, model} = require('mongoose');

const schema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    }
})

const musicalItems = model('musicalItem', schema)
module.exports = { musicalItems }