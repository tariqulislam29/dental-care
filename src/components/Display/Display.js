import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Display.css'

const Display = () => {
    let { serviceKey } = useParams();
    const dServicekey = parseFloat(serviceKey);
    const [services, setServices] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);

    useEffect(() => {
        const findData = services.find(service => service.key === dServicekey)
        setDetails(findData);
    }, [services, dServicekey]);

    return (
        <div className="full-display">
            <div className="text-center display">

                <img src={details?.img} alt="" className="img-size" />
                <br />
                <h2>{details?.name}</h2>
                <p>{details?.description}</p>
                <p>{details?.full_description}</p>




            </div >
        </div>
    );
};

export default Display;