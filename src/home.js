import React, { useEffect, useState } from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Dash from "./components/dashboard";
import Login from "./login";




export default function Home(){


    
   
    
    return(
        
        <>
        <h1>Home</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dash/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      
        </>

    )

}