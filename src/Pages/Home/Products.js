import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Products() {

    const list = [{
        img: "./images/Shoes-01.jpg",
        details: 'Abacavir'
    }, {
        img: "./images/Laptop-01.jpg",
        details: 'Abacavir'
    }, {
        img: "./images/Watch-01.jpg",
        details: 'Abacavir'
    }]

    const Navigate = useNavigate();

    const click = (i, d) => {
        Navigate("/ViewDetails", { state: { data: d } })
    }

    return (
        <>
                <h1 style={{ textAlign: 'center' }}>Product Card</h1>
            <Container style={{display:'flex', alignItems : 'center'}}>
                {
                    list.map((d, i) => {
                        return (
                            <Card className='col-3' style={{ margin: '20px'}} key={i}>
                                <Card.Img style={{height:'200px'}} variant="top" src={d.img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { click(i, d) }}>View Details</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default Products;