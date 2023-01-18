import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom';

function Features() {
  const nav = useNavigate();
  const locaction = useLocation();

  const back = () => {
    nav(-1)
  }

  return (
    <>
      <div>View</div>
      <Container>
        <h1>
          {
            locaction.state.data
          }
        </h1>
        <p>
          {
            locaction.state.msg
          }
        </p>
        <Button variant='primary' onClick={() => { back() }}>Back</Button>
      </Container>
    </>
  )
}

export default Features;