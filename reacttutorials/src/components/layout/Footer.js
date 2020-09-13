import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './RBLogo.png';


export default function Footer() {
    return (
        <footer style={footerStyle}>
            <Container className="text-white d-flex justify-content-around" style={{maxWidth: '1400px'}}>             
                <img
                    src={Logo}
                    height="50"
                    className="d-inline-block align-top"
                    alt="RBLogo"
                />
                <div className="text-center">
                    <h2>About</h2>
                    <a style={linkStyle} href="/">
                        <p>link</p>
                    </a> 
                    <a>
                        <p>link</p>
                    </a>    
                </div>
                <div className="text-center">
                    <h2>Other</h2> 
                    <a>
                        <p>link</p>
                    </a> 
                    <a>
                        <p>link</p>
                    </a>  
                </div>                     
            </Container>
        </footer>
    )
}

const footerStyle = {
    background: '#4C545B',
    height: '400px',
    paddingTop: '3rem',
}

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
}