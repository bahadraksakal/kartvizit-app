const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    userId: {
        type: String,
       //required: true,//front en yazılınca etkinleştir        
    }
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;