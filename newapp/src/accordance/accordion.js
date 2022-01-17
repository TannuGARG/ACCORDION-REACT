import React, { useState } from "react"
import "./style.css" 
import {questions} from "./data"
import MyAccordion from "./myaccordion"
export default function ACCORDIAN(){
    const [data,setData]=useState(questions);
    const [dir,setDir]=useState(0);
    return(
        <>    
            <button name={0} onClick={(e)=>{setDir(e.target.name);}}>top</button>
            <button name={1} onClick={(e)=>{setDir(e.target.name);}}>bottom</button>
            <button name={2} onClick={(e)=>{setDir(e.target.name);}}>left</button>
            <button name={3} onClick={(e)=>{setDir(e.target.name);}}>right</button>
            <div>direction:{dir}</div>
            {data.map((ele,index)=>{
                const {indx}=ele;
                return <MyAccordion className="myapp" key={indx} dir={dir}{...ele}/>
            

            })
        }
        
        </>
    
    
    

)}