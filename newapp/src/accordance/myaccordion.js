import React, { useState } from "react"
import "./style.css" ;

export default function MyAccordion({dir,question,answer}){
    const [hover,setHover]=useState(false)
   
    return(
        <div className="main">
            <div className={"cont"+dir}>
           
            <div  onClick={()=>setHover(!hover)}  className="ques">
                <p>{question} </p>
            </div> 
            
            {hover? <div className="ans">{answer}</div>:<div></div>}
                
           
           
        </div>
        

        </div>

    
        
        
        
        
    
    )
    
}