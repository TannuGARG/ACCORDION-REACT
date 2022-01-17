import './App.css';
// import Accordion from './accordion';
import {data} from "./onleone_acc/data"
import React, { useState } from 'react';
export default function App() {
  const [opened, setOpened] = useState(false)
    const selected = (index)=>{
        if (opened === true){
            return setOpened(false)
        }
        else{
            setOpened(index)
        }
    }
  return (
    <div className="myacc">
      <div className="accordion">
        <h2>Interview Questions...</h2>
          {data.map((data,index) => (
            <div className="item">
            <div className="ques" onClick={()=> selected(index)} key={index}>
                <h3>{data.question}</h3>
                <span>{opened === index ? '˄' : '˅'}</span>
            </div>
            {opened === index ? (<p className='ans'>{data.answer}</p>): null}
        </div>
          ))}
      </div>
    </div>
  );
  
}



