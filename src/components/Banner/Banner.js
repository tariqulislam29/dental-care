import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block  banner-image"
                        src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGFsJTIwY2xpbmljfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >More Then <br /> 40 years <br /> Experience</h3>
                        <p>Choosing the right dentist for your family is an important decision.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-image"
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGFsJTIwY2xpbmljfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 > More Than <br /> 45,000  <br /> Satisfied  Patient
                        </h3>
                        <p>We pride ourselves on having a friendly, helpful and dedicated team </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-image"
                        src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVudGFsJTIwY2xpbmljfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 > More Than <br /> 14 Years of Implant <br />  Practice Experience
                        </h3 >
                        <p>We offer you a wide range of dental services Our team of dentists is highly qualified and experienced.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;