const registermodel = require('../models/registration');

module.exports.setregistrationdetails = async(req,res)=>{
    console.log(req.body);
    const eventname = req.body.eventname
    const name = req.body.name
    const branch = req.body.branch
    const phonenumber = req.body.phonenumber
    const email = req.body.email

    if (!eventname || !name || !branch || !phonenumber || !email){
        return res.send({code:400,message:'data not recieved'})
    }
    const newentry = new registermodel({eventname:eventname,name:name,branch:branch,phonenumber:phonenumber,email:email})
    const success = newentry.save()
    if (success){
        return res.send({code:200,message:'successful'})
    }
    else{
        return res.send({code:500,message:'error'})
    }
}