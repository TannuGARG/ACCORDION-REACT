import React, { useState } from "react"
import "./style.css" ;

export default function MyAccordion({question,answer}){
    const [show,setShow]=useState(false)
    return(
        <>
         <div className="main1">
            <p onClick={()=>setShow(true)} className="ques">{question}</p>
        </div>
        {show? <p className="ans">{answer}</p>:<p></p>}
        
        
    </>
    )
    
}