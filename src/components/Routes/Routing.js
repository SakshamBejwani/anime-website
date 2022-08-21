import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";

import Login from '../../pages/Login/Login';
import Signup from '../../pages/SignUp/Signup';
import Home from '../../pages/Home/Home';

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<Home />} />
          
        </Routes>
     
    </BrowserRouter>
  )
}

export default Routing