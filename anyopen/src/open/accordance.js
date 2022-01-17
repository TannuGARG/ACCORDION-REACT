import React, { useState } from "react"
import "./style.css" 
import {questions} from "./data"
import MyAccordion from "./myAccordance"
export default function ACCORDIAN(){
    const [data,setData]=useState(questions)
    
    return(
        <> 
            <div className="container">
               <h2>Interview Question </h2>
                {
                        data.map((ele) =>{
                            const {indx}=ele;
                            return <MyAccordion key={indx} {...ele}/>

                    })
                }

            </div>
           

        
            
        
        </>
    
    
    

)}