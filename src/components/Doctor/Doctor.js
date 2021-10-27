import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, img, specialist, title } = props.item;
    return (
        <div>
            <Col className="container text-center" >

                <Card className="card w-100 ">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-center" >
                        <Card.Title className="card-title fs-3">{name} <span className="text-success fs-5">{title}</span></Card.Title>
                        <p>{specialist}</p>
                    </Card.Body>



                </Card>
            </Col>
        </div>
    );
};

export default Doctor;