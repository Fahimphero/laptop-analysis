import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='sticky-top'>
            {/* <Link to='/'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link> */}
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="/" ><span className='brandLink'>Gold Tech BD</span> </Navbar.Brand>
                        <Nav
                            className="ms-auto my-2 my-lg-0 navLink"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='navLink' to="/">Home</Link>
                            <Link className='navLink' to='/reviews'>Reviews</Link>
                            <Link className='navLink' to='/dashboard'>Dashboard</Link>
                            <Link className='navLink' to='/blogs'>Blogs</Link>
                            <Link className='navLink' to='/about'>About</Link>
                            <hr />

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;