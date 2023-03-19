import React,{useState} from 'react'
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../CSS/register.css'
import axios from 'axios';

function Registration(props) {
    const location = useLocation();
    const data = location.state?.data;

    const [eventname,seteventname]=useState(data? data.name:'not possible');
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [phonenumber,setphonenumber]=useState('');
    const [branch,setbranch]=useState('');

    const handlechangename = (e)=>{
        setname(e.target.value);
    }

    const handlechangebranch = (e)=>{
        setbranch(e.target.value);
    }
    const handlechangeemail = (e)=>{
        setemail(e.target.value);
    }
    const handlechangepno = (e)=>{
        setphonenumber(e.target.value);
    }

    const handlesubmit = () =>{
        console.log(eventname,name,branch,phonenumber,email);
        axios.post('http://localhost:8000/register',{
            eventname:eventname,
            name,
            branch,
            phonenumber,
            email
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err);
        })

    }


  return (
    <div>
        <Header/>
        <div className='form-fill-text text-data-info'>
            Fill the form to register for this event!
        </div>
        <div class="data-1 input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Event name</span>
            <input type="text" class="form-control" value={eventname} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="data-1 input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Full Name</span>
            <input type="text" class="form-control" value={name} onChange={handlechangename} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="data-1 input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Branch </span>
            <input type="text" class="form-control" value={branch} onChange={handlechangebranch} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="data-1 input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Phone number(preferably whatsapp number)</span>
            <input type="number" class="form-control" value={phonenumber}  onChange={handlechangepno} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="data-1 input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Email-address</span>
            <input type="email" class="form-control" value={email} onChange={handlechangeemail} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className='btn-1'>
        <Link to='/thankyou'>
        <button type="button" onClick={handlesubmit} class="btn btn-outline-dark">Submit</button>
        </Link>
        </div>



    </div>
  )
}

export default Registration