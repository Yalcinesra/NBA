import React, { useState } from 'react'
import {data} from "../helper/data"
import PlayCard from './PlayCard'


const CardContainer = () => {
  const [name, setName] = useState("")
  const [input,setInput]=useState("")
  const searchEvent=(e)=>{
    setInput(e.target.value)

  }
 
  
  return (
    <div className='arka text-center '>
     <form>
     <div className='container'>
        <input onChange={searchEvent}
          type="text" placeholder='Search Player' 
          className='form-control w-75 text-center'          
        />  </div>
        </form>
        <div className='d-flex flex-wrap justify-content-center '>
        { 
    data.filter((a)=>a.name.toLowerCase().includes(input.toLowerCase())).map((item)=>  <PlayCard {...item} key={item.img}/>)}</div>
    
       
    </div>
  )
}

export default CardContainer