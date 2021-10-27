import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    return (
        <div>

            <Row xs={1} md={3} className="g-4 m-5 ">
                {
                    services.map(item => <Service
                        key={item.key}
                        item={item}
                    >
                    </Service>)
                }


            </Row>
        </div>
    );
};

export default Services;