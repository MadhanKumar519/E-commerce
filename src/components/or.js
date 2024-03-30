import React from "react";
import { useState } from "react";
import './boo.css'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import s from "./header.module.css"




 function Or(props){

   



    function det(){

        
    console.log(props.price,props.name,props.qty,props.date)

        
   
  

        
   
        const div=document.getElementById('div')
        const h3=document.createElement('h3')
        h3.innerHTML=`${props.name},${props.qty},${props.price},${props.date}`
        const img=document.createElement('img')
        img.src=`${props.img}`
        div.append(img)
        div.append(h3)
      
        
    }

  
    

    

   

    
    



    

    
 

    


   

    

    return(
        <>
        <button onClick={det}>click</button>
        <div id="div" >

        </div>
        
        </>
    
    )

    

   


}

export default Or 