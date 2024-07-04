import React, { useState} from 'react';
import Mainapp from './Mainapp.js'

export default function Resturent() {

  const[input, output] = useState("Hellow")

  const newinputchange = (event) => {
    const newoutput = event.target.value
    output(newoutput)
  }
  return (
    <div >
  
     <h2>{input}</h2>
    Name:<input type="text" value={input}  placeholder='Say somethings' onChange={newinputchange}/>
    <Mainapp/>
   </div>
  

  );
}
