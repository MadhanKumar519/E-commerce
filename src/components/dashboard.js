import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Dash(){

    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('isAuthenticated')){

            navigate('/login')
    
    
    
        }},[navigate]);


    
   
    
    return(
        
        <>
        <h1>welcome users</h1>
       
        </>

    )

}