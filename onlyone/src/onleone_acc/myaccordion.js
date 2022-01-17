import React, { useState } from "react"
import "./style.css" ;

export default function MyAccordion({index,question,answer}){
    
    

    const [opened, setOpened] = useState(false)
    const selected = (index)=>{
        if (opened === index){
            return setOpened(null)
        }
        else{
            setOpened(index)
        }
    }
    
   
    return(
        <>
        
        <div className="main1">
            <p onClick={()=> selected(index)}  className="ques">{question} </p>
            <span>{opened === index ? '˄' : '˅'}</span>
        </div>
        {opened===index? <p className="ans" >{answer}</p>:<p></p>}
        
        
    </>
    )
    
}

// import './App.css';
// // import Accordion from './accordion';
// import { data } from './data/data.js';
// import React, { useState } from 'react';
// function App() {
//   const [opened, setOpened] = useState(false)
//     const selected = (index)=>{
//         if (opened === index){
//             return setOpened(null)
//         }
//         else{
//             setOpened(index)
//         }
//     }
//   return (
//     <div className="body">
//       <div className="accordion">
//         <h2>All About React...</h2>
//           {data.map((data,index) => (
//             <div className="item">
//             <div className="question" onClick={()=> selected(index)} key={index}>
//                 <h3>{data.question}</h3>
//                 <span>{opened === index ? '˄' : '˅'}</span>
//             </div>
//             {opened === index ? (<p>{data.answer}</p>): null}
//         </div>
//           ))}
//       </div>
//     </div>
//   );
// }
// export default App;