import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
    return (
        <Container>
        <h1 style={{textAlign : 'center'}}>Product Card</h1>
            <Row style={{justifyContent : 'center'}}>
            <Card className='col-3' style={{ margin : '20px'}}>
                <Card.Img variant="top" src="./images/Shoes-01.jpg" style={{ width : '300px', height : '200px'}} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>

            <Card className='col-3' style={{ margin : '20px'}}>
                <Card.Img variant="top" src="./images/Laptop-01.jpg" style={{ width : '300px', height : '200px'}} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>

            <Card className='col-3' style={{ margin : '20px'}}>
                <Card.Img variant="top" src="./images/Watch-01.jpg" style={{ width : '300px', height : '200px'}} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
            </Row>
            
        </Container>
    );
}

export default Products;