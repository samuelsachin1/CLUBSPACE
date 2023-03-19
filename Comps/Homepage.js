import React from 'react'
import Card from '../Components/Card';
import Header from '../Components/Header';
import '../CSS/home.css'
import Carousel from '../Components/Carousel';
function Homepage() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <div className='row'>
        <div className='col-1'>

        </div>
        <div className='col-2'>
          <Card/>
        </div>
      </div>
      
    
    

    </div>
  )
}

export default Homepage