import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Menu = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-5">Dental Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5 ">
                            <Nav.Link as={Link} to='/home' className="p-3 text-dark ">Home</Nav.Link>
                            <Nav.Link as={Link} to='/services' className="p-3 text-dark" >Services</Nav.Link>
                            <Nav.Link as={Link} to='/doctors' className="p-3 text-dark">Doctors</Nav.Link>
                            <Nav.Link as={Link} to='/appointment' className="p-3 text-dark">Appointment</Nav.Link>
                            <Nav.Link as={Link} to='/contact' className="p-3 text-dark">Contact</Nav.Link>

                            <span className="p-3 text-dark">{user.displayName}  </span>
                            {
                                user.email ?
                                    <button onClick={logOut} className="p-2 rounded-pill bg-success text-light">Logout</button>
                                    :
                                    <Nav.Link as={Link} to='/login' className="p-3 text-dark  " ><i class="fas fa-user"></i> Login</Nav.Link>
                            }

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Menu;