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
        <h2>{proData.title}</h2>
        <img style={{ width: '50%' }} src={proData.img} />
        <h4>{proData.title}</h4>
        <h5>{`${proData.price} Rs.`}</h5>
        <h5>{proData.description}</h5>
        <p>{proData.details}</p>
        <br />
        <Button onClick={() => { back() }}>back</Button>
      </Container>
    </>
  )
}

export default ViewDetails;