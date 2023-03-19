const mongoose=require('../config/connection');

const postschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
desc:{
    type:String,
    required:true}
  ,
startdate:{
   type:Date,
    required:true
},
enddate:{
   type:Date,
    required:true
},
imageurl:{
    type:String}

})

module.exports = mongoose.model('post',postschema);