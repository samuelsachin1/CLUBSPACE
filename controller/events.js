const eventmodel = require('../models/event');



module.exports.seteventdetails = async(req,res)=>{

    console.log(req.body);
    console.log(req.file)
    const name= req.body.name
    const desc= req.body.desc
    const startdate= req.body.startdate
    const enddate= req.body.enddate
    const imageurl=req.file.path
    
    if (!name||!desc||!startdate||!enddate||!imageurl){
        return res.send({code:400,message:'data not found'})
    }
    const newentry = new eventmodel({name:name,desc:desc,startdate:startdate,enddate:enddate,imageurl:imageurl})
    const success = await newentry.save()
    if (success){
        return res.send({code:200,message:'successfully added',id:newentry._id})
    }
    else{
        return res.send({code:500,message:'error'})
    }
}


module.exports.geteventdetails = async(req,res)=>{
    const data = await eventmodel.find({});
    if (data){
        return res.send({code:200,message:'succesfully sent',data:data})
    } else{
        return res.send({code:400,message:'error'})
    }

}

module.exports.getsingleeventdetails =async (req,res)=>{
    const data = await eventmodel.findById(req.params.id)
    if (data){
        return res.send({code:200,message:'success',data:data})
    }
    else{
        return res.send({code:400,message:'cannot retrieve'});
    }
}