import React from "react";
import Homepage from './Comps/Homepage';
import Createform from './Comps/Createform';
// import Login from './elements/<Login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from "./Components/Footer";
import Singlepost from "./Components/Singlepost";
import Registration from "./Comps/Registration";
import Thankyou from "./Comps/Thankyou";
import Created from "./Comps/Created";
import Signin from "./Comps/Signin";
import Signup from "./Comps/Signup";


function App() { 
  return (
    
      <div className="App">
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/home" element={<Homepage/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route  path="/create" element={<Createform/>}/>
        <Route  path="/singledetail/:id" element={<Singlepost/>}/>
        <Route  path="/register" element={<Registration/>} />
        <Route  path="/thankyou" element={<Thankyou/>} />
        <Route  path="/eventcreated" element={<Created/>} />
        </Routes>
        <Footer/>
      
      </BrowserRouter> 
      </div>

    

  );
}

export default App;
