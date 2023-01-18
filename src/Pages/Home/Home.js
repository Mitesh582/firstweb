import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function Home() {

  const nav = useNavigate();

  // const list = ["Home" , "Shop" , "Contact"]

  const click = () => {
    
    // nav("/View", {state : {data : list , msg : "Hello...!"}})
    nav("/EmpView")
  }
  const back = () => {
    nav("/back")
  }

  const Add =()=>{
    nav("/AddEmployee")
  }
  return (
    <>
      <div>Home</div>
      <Container>
        <Button variant='primary' onClick={() => { click() }}>View</Button>
        <Button variant='primary' onClick={() => { back() }}>Back</Button>
        <Button variant='primary' onClick={() => { Add() }}>AddEmployee</Button>
      </Container>
    </>
  )
}

export default Home;