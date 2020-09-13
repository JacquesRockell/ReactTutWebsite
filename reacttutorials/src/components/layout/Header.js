import React from 'react';
import Logo from './RBLogo.png';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl, Container} from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar fixed="top"  style={navStyle}>
                <Container style={{ maxWidth: '1400px', padding: '0' }}>
                    <Navbar.Brand>
                        <img
                            src={Logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="RBLogo"
                        />    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto text-light">
                                <Nav.Link className="text-white ml-4" href="/">Home</Nav.Link>
                                <Nav.Link className="text-white ml-4" href="/about">About</Nav.Link>
                                <Nav.Link className="text-white ml-4" href="/movielist">Movie List</Nav.Link>
                            </Nav>    
                    </Navbar.Collapse>
                </Container>      
            </Navbar>
        </header>
    )
}

const navStyle = {
    background: 'rgba( 76, 84, 91 )',
    background: 'rgba( 76, 84, 91, .75 )',
    backdropFilter: 'blur(4px)',
}