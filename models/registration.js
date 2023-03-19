const mongoose = require('../config/connection');

const registerschema = mongoose.Schema({
    eventname:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    }


})

module.exports = mongoose.model('register',registerschema)