import React, { useState } from "react"
import "./style.css" ;

export default function MyAccordion({question,answer}){
    const [hover,setHover]=useState(false)
    
   
    return(
        <>
        <div className="main1">
            <p onClick={()=>{setHover(!hover)}}  className="ques">{question}</p>
        </div>
        {hover? <p className="ans">{answer}</p>:<p></p>}
        
        </>
        
        
    )
    
}

