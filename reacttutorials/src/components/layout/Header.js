import React from 'react';
import Logo from './rblogov2.png';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';
import { right } from '@popperjs/core';

export default function Header() {
    return (
        <header>
            <Navbar className="customnav" fixed="top"  style={navStyle}>
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
                                <Nav.Link>
                                    <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" end={true} activeStyle={activeStyle} to="/" activeStyle={activeStyle}>
                                        Home
                                    </NavLink> 
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" to="/about" activeStyle={activeStyle}>
                                        About
                                    </NavLink> 
                                </Nav.Link>
                                <Nav.Link>                                  
                                    <NavLink className="p-4 pb-4 pt-4 text-white text-decoration-none" to="/tutorials" activeStyle={activeStyle}>
                                        Tutorials
                                    </NavLink> 
                                </Nav.Link>
                            </Nav>    
                    </Navbar.Collapse>
                </Container>      
            </Navbar>
        </header>
    )
}

const activeStyle = {
    paddingTop: '26px',
    paddingBottom: '25px',
    width: '100%',
    background: 'linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,0) 105%)',
    borderWidth: '0 0 5px 0',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to left, rgba(67,169,170,1), rgba(105,67,170,1)) 1' 
}

const navStyle = {
    background: 'rgba( 76, 84, 91 )',
    background: 'rgba( 76, 84, 91, .80 )',
    backdropFilter: 'blur(2px)',
}