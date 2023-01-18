import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function Feature() {

  const nav = useNavigate();

  const click = () => {
    
    nav("/View", {state : {msg : "Good Mornoooo...!"}})
  }
  const back = () => {
    nav("/back")
  }
  return (
    <>
      <div>Feature</div>
      <Container>
        <Button variant='primary' onClick={() => { click() }}>View</Button>
        <Button variant='primary' onClick={() => { back() }}>Back</Button>
      </Container>
    </>
  )
}

export default Feature;