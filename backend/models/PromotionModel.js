const mongoose = require('mongoose')

const promotionSchema = new mongoose.Schema({
    ID:{
        type:String
    },
    Name:{
        type:String
    },
    OtherNotes:{
        type:String,
        default: 'None'
    },
    Type:{
        type:String
    },
    Discount:{
        type:String
    },
    Conditions:{
        type:String
    },
    Status:{
        type:String,
        default:'Active'
    }
})

module.exports = mongoose.model('Promotion', promotionSchema)
