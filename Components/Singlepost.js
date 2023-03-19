import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header'
import axios from 'axios';
import '../CSS/singlepost.css'
import { Link } from 'react-router-dom';

function Singlepost() {
    const [data,setdata]= useState('');
    const {id}= useParams();
    const url = `http://localhost:8000/${data.imageurl}`
    useEffect(()=>{
        const fetchdata = async()=>{
            axios.get(`http://localhost:8000/singleevent/${id}`).then((res)=>{
                console.log(res.data);
                setdata(res.data.data);
            }).catch((err)=>{
                console.log(err);
            })

        }
        fetchdata();
    },[])

    const eventname = data.name;
  return (
    <div>
        <Header/>
        <div className='main-body-1'>
            <div className='name-data-1'>
                {data.name}
            </div>
            <div className='image-data-1'>
                <img src={url}/>
            </div>
            <div className='desc-data-1'>
                {data.desc}
            </div>
            <div className='sd-data-1 flex'>
                <div className='start-date-text'>
                    Start date:
                </div>
                <div className='start-date-date'>
                {data.startdate}
                </div>
            </div>
            <div className='ed-data-1 flex'>
                <div className='end-date-text'>
                    End date:
                </div>
                <div className='end-date-date'>
                {data.enddate} 
                </div>
                
            </div>
            <div>
            <Link to='/register' state={{data:data}}>
            <button type="button"  class="btn btn-outline-dark">Register</button>
            </Link>
            </div>
        </div>

    </div>
  )
}

export default Singlepost