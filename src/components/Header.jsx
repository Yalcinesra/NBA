import React from 'react'
// import Container from 'react-bootstrap/esm/Container'
// import Image from 'react-bootstrap/esm/Image'
import {Container, Image} from "react-bootstrap"
import nbaLogo from "../assets/nba-logo.png"
const Header = () => {
  return (
    <Container>
<Image src={nbaLogo} width="200px"/>
<h1 className='display-4 my-2 fw-bold font-monospace'>NBA Legends</h1>
    </Container>
  )
}

export default Header