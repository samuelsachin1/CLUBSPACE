import React,{useState} from 'react'
import '../CSS/createform.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Createformbody() {
    const [name,setname]=useState('');
    const [desc,setdesc]=useState('');
    const [startdate,setstartdate]=useState('');
    const [enddate,setenddate]=useState('');
    const [image,setimage]=useState('');

    const handlechangen = (e)=>{
        setname(e.target.value)
    }
    const handlechanged = (e)=>{
        setdesc(e.target.value)
    }
    const handlechangesd = (e)=>{
        setstartdate(e.target.value)
    }
    const handlechangeed = (e)=>{
        setenddate(e.target.value)
    }

    const handlesubmit = async ()=>{
        console.log(name,desc,startdate,enddate,image);
        const formdata = new FormData()
        formdata.append('name',name)
        formdata.append('desc',desc)
        formdata.append('startdate',startdate)
        formdata.append('enddate',enddate)
        formdata.append('image',image)
        
        axios.post('http://localhost:8000/create',formdata
            // name:name,
            // desc:desc,
            // startdate:startdate,
            // enddate:enddate
        ).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);       
    })
    }

  return (
    <div>
         <div style={{marginLeft:"50px",marginRight:"50px"}}>
            <div class="input-group input-group-lg" style={{marginTop:"100px",marginBottom:"50px"}}>
                <span class="input-group-text" id="inputGroup-sizing-lg">Name</span>
                <input type="text" class="form-control" value={name} onChange={handlechangen} placeholder="Enter event name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
            <div class="input-group input-group-lg" style={{marginTop:"50px",marginBottom:"50px"}}>
                <span class="input-group-text" id="inputGroup-sizing-lg">Description</span>
                <textarea type="text" class="form-control" value={desc} onChange={handlechanged} placeholder="Enter description about the event" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
             <div class="input-group input-group-lg" style={{marginTop:"50px",marginBottom:"50px"}}>
                <span class="input-group-text" id="inputGroup-sizing-lg">Start Date</span>
                <input type="date" class="form-control" value={startdate} onChange={handlechangesd} placeholder="Enter the starting date of the event" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
            <div class="input-group input-group-lg" style={{marginTop:"50px",marginBottom:"50px"}}>
                <span class="input-group-text" id="inputGroup-sizing-lg">End Date</span>
                <input type="date" class="form-control" value={enddate} onChange={handlechangeed} placeholder="Enter end date of the event" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div> 
            <div>
            <input type='file' name='imageurl' onChange={(e)=>{setimage(e.target.files[0])}}/>
            </div><Link to='/eventcreated'>
                    <button onClick={handlesubmit} className="btn btn-outline-dark" style={{marginTop:"50px",marginBottom:"200px",textDecorationColor:'white'}}>Create Event</button> 
                </Link>
            </div> 
{/* 
    <input  value={name} onChange={handlechangen} className='input-admin' type="text" placeholder='name'/><br/>
    <input  value={desc} onChange={handlechanged} className='input-admin' type="text" placeholder='desc'/><br/>
    <input  value={startdate} onChange={handlechangesd} className='input-admin' type="date" placeholder='sd'/><br/>
    <input  value={enddate} onChange={handlechangeed} className='input-admin' type="date" placeholder='ed'/><br/>
    <button onClick={handlesubmit}>Submit</button> */}
</div>

  )
}

export default Createformbody 