const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/clubspace',(err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("connected to mongoose");
    }
})

module.exports = mongoose;