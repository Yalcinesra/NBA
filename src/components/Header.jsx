import React from 'react'
import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div className='container p-4 text-center '>
        <img src={logo} alt="NBA Logo" width="200px"/>
        <h1 className='display-3 fw-bold'>NBA Legends</h1>
    </div>
  )
}

export default Header