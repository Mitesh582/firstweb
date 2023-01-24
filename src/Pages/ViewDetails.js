import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function ViewDetails() {
  const nav = useNavigate();
  const Location = useLocation();
  //   console.log(Location);

  const proData = Location.state.data;
  console.log("proData", proData.details);

  const back = () => {
    nav(-1)
  }
  return (

    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>Card</h1>
        <h2>{proData.details}</h2>
        <img style={{width : '50%'}} src={proData.img} alt={proData.details} />
        <br />
        <Button onClick={() => { back() }}>back</Button>
      </Container>
    </>
  )
}

export default ViewDetails;