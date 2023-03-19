import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/header.css'

function Header() {
  const [activetab,setactivetab]=useState('Home');
  return (
    <div className='header-body'>
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="header-body container-fluid">
      <h3 style={{fontFamily:"fantasy",fontSize:'50px',borderStyle:'solid',borderWidth:'5px',paddingLeft:'5px',paddingRight:'5px',marginRight:'650px'}}>CLUBSPACE</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to="/home">
        <button type="button" class="btn btn-outline-dark">Home</button>

          </Link>
          <Link to="/create">
        <button type="button" class="btn btn-outline-dark">Create Event</button>

          </Link>
          <Link to="/">
        <button type="button" class="btn btn-outline-dark">Log out</button>

          </Link>
          
          
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
    </div>
  
 
  )
}

export default Header