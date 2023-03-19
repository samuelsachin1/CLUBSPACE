import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Card() {

    const [data,setdata]=useState([])
    useEffect(
        ()=>{
            axios.get('http://localhost:8000/create').then((res)=>{
                console.log(res.send)
                setdata(res.data.data)
            }).catch((err)=>{
                console.log(err)
            })
        },[]
    )
  return (
    <div>
        <div>{
                data.length>0?
                data.map((item,index)=>{
            return (
            <div className='card-body-main flex'>
                <div className='image-image flex'>
                <img src={`http://localhost:8000/${item?.imageurl}`}/>
                </div>
                <div className='text-data'>
                <div className='name-data'>{item?.name}</div>
                <div className='desc-data'>{item?.desc}</div>
                <div className='name-startdate'>{item?.startdate}</div>
                <div className='name-enddate'>{item?.enddate}</div>
                <Link to={`/singledetail/${item._id}`}><button type="button" class="btn btn-outline-dark">go</button></Link>
                </div>
            </div>
        )
      })
    :'no data found'
    }
    
        </div>
       
    
    </div>
  )
}

export default Card