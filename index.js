const express=require('express');
const app=express();
const port=8000;
const cors = require('cors')
const event = require('./controller/events');
const register = require('./controller/registration');
const users = require('./controller/userdetails')
const bodyparser= require('body-parser');

const multer = require('multer')
const upload = multer({dest:'uploaded/'})
app.use('/uploaded',express.static('uploaded'))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors());


app.post('/create',upload.single('image'),event.seteventdetails);

app.get('/create',event.geteventdetails);

app.get('/singleevent/:id',event.getsingleeventdetails)

app.post('/register',register.setregistrationdetails)

app.post('/signup',users.registeruserdetails)

app.post('/login',users.checklogindetails)

app.listen(port,(err)=>{
    if (err)
        {console.log(err);}
    else
    {
        console.log(`server running at port ${port}`);
    }
    
})