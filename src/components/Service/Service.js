import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { key, name, img, description } = props.item;
    return (
        <div>
            <Col >

                <Card className="card card-design ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title">{name}</Card.Title>
                        <p>{description}</p>
                    </Card.Body>
                    <Link to={`/display/${key}`}>
                        <button className=" text-white ">Details</button>
                    </Link>

                </Card>
            </Col>
        </div>
    );
};

export default Service;