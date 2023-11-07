import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

console.log(data);
const CardContainer = () => {

    const [search,setSearch]=useState("")
    


  return (
    <>
     <Form.Control placeholder="Search Player..." className="w-50 m-auto" type="search"
onChange={(e)=>setSearch(e.target.value)}

     />

      <Container className="rounded-4 my-4 p-3 card-konteynir">
        <Row className="justify-content-center g-3">
         
          {data.filter((player)=>player.name.toLowerCase().includes(search.toLowerCase())).map((player, index) => (
            <Col md={6} lg={4} xl={3} key={index}>
              
              <PlayerCard {...player} />
            </Col>
          ))}
          
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
