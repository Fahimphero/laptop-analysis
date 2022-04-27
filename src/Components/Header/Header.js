import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <Navbar sticky='top' bg="dark" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Navbar.Brand href="/" ><span className='brandLink'>Laptop </span>Analysis </Navbar.Brand>
                    <Nav
                        className="ms-auto my-2 my-lg-0 navLink"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='navLink' to="/">Home</Link>
                        <Link className='navLink' to='/reviews'>Reviews</Link>
                        <Link className='navLink' to='/dashboard'>Dashboard</Link>
                        <Link className='navLink' to='/blogs'>Blogs</Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );
};

export default Header;