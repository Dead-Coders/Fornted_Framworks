import React, { useState} from 'react'
import './resturent.css'

export default function Resturent(props) {

  const [newfirsttitle, newmainfun] = useState("");
  const [firsttitle, mainfun] = useState(props.title);

  const cilckhandler = () => {
    mainfun(newfirsttitle)
  }
  const ccclick = (event) => {
    newmainfun(event.target.value)
  }
  return (
    <div className='main'>
    <h1>{firsttitle}</h1>
    
    <button onClick={cilckhandler} className='bg-ll'> click me</button>
     <br /> 
     Name:<input type="text" value={newfirsttitle} className='nn' onChange={ccclick} />

</div>

  );
}
