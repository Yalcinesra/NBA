import React, { useState } from 'react'
import "./css/playCard.css"
import {FaBasketball} from "react-icons/fa6"

const PlayCard = (data) => {
  const [sonuc, setSonuc]=useState(true);
 
 
    const changeInfo = () => {
      if(sonuc===true){
        setSonuc(false)

      }else setSonuc(true)
      
    }

  return (

    <div className=" card m-4 " style={{width: "300px"}} onClick={changeInfo}>

 <div className='cardImg'>
 {sonuc===true ? (<img src= {data.img}  alt="" width="300px" height="300px" />) :(<div>
 <div className='m-4  d-flex flex-column  align-items-center justify-content-center '>
  <ul className='m-4 p-3 '>
    <li> <FaBasketball/> {data.statistics[0]}</li>
    <li><FaBasketball/>{data.statistics[1]}</li>
    <li><FaBasketball/>{data.statistics[2]}</li>
    
  </ul></div>
 </div>)  }
 
 
 
 </div>
  <div className="card-body">
    <p className="card-text">{data.name}</p>
  </div>


</div>
  )
}

export default PlayCard