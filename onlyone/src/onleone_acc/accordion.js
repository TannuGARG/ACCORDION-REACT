import React, { useState } from "react"
import "./style.css" 

import MyAccordion from "./myaccordion"
import {questions} from "./data"

export default function ACCORDIAN(){
    const [data,setData]=useState(questions)
    
    
    

    return(
        <> 
            <div className="container">
               <h2>Interview Question </h2>
                {
                        data.map((ele,index) =>{
                            // const {indx}=ele;
                            return <MyAccordion key={index} {...ele}/>

                    })
                }

            </div>
           

        
            
        
        </>
    
    
    

)}