import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer ">




                <div>
                    <h3 className="text-success" >Contact</h3>
                    <h5>Phone</h5>
                    <p>018430518xx</p>
                    <h5>Email</h5>
                    <p>dentalcare@gmail.com</p>
                    <h5>Address</h5>
                    <p>Dhaka-1361,Bangladesh</p>
                </div>

                <div className="explore">
                    <h3 className="text-success">Explore</h3>
                    <Link to='/Services' className="p-3 text-dark footer-link" >Services</Link>
                    <br />

                    <Link to='/doctors' className="p-3 text-dark footer-link">Doctors</Link>
                    <br />
                    <Link to='/appointment' className="p-3 text-dark footer-link">Appointment</Link>

                    <div>
                        <i className="fab fa-facebook "></i>
                        <i className="fab fa-instagram px-3"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                </div>

                <div>

                    <h3 className="text-success">Support</h3>
                    <h5>Online Support</h5>
                    <h5>Make Call</h5>
                    <h5>Contact Support</h5>
                    <h5>Opening Hours</h5>
                    <h5>Free Consultancy</h5>
                    <h5>24/7 Service</h5>

                </div>


            </div>

        </div>
    );
};

export default Footer;